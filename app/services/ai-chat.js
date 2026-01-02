import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { filterSystemTypes } from 'junction/utils/system-types';

export default class AiChatService extends Service {
  @service store;
  @service types;
  @service blueprints;

  @tracked currentChat = null;
  @tracked allChats = [];
  @tracked isLoading = false;
  @tracked pendingTypesJson = null;
  @tracked currentMode = 'types'; // 'types' or 'frontend'
  @tracked pendingFrontendStructure = null;

  /**
   * Load all ai_chat records from the store
   */
  @action
  async loadChats() {
    try {
      this.allChats = await this.store.query('ai_chat', {
        show_public_objects_only: false,
        sort: '-created_date',
      });

      // If no current chat and chats exist, select the first one
      if (!this.currentChat && this.allChats.length > 0) {
        this.currentChat = this.allChats[0];
      }

      // If no chats exist, create the first one
      if (this.allChats.length === 0) {
        await this.createNewChat();
      }
    } catch (error) {
      console.error('Error loading chats:', error);
    }
  }

  /**
   * Create a new ai_chat record
   */
  @action
  async createNewChat() {
    try {
      const newChat = this.store.createRecord('ai_chat', {
        modules: {
          title: 'New Chat',
          messages: [],
          content_privacy: 'private',
          frontend_structure: null,
        },
      });

      await newChat.save();

      this.allChats = [newChat, ...this.allChats];
      this.currentChat = newChat;

      return newChat;
    } catch (error) {
      console.error('Error creating new chat:', error);
    }
  }

  /**
   * Switch to a different chat
   */
  @action
  selectChat(chat) {
    this.currentChat = chat;
  }

  /**
   * Set the current mode (types or frontend)
   */
  @action
  setMode(mode) {
    this.currentMode = mode;
  }

  /**
   * Get current blueprint filtered to exclude system types
   */
  getCurrentBlueprint() {
    if (!this.types.json || !this.types.json.modules) {
      return {};
    }
    return filterSystemTypes(this.types.json.modules);
  }

  /**
   * Get current frontend structure from current chat
   */
  getCurrentFrontendStructure() {
    return this.currentChat?.modules?.frontend_structure || null;
  }

  /**
   * Send a message to the AI API and handle the response
   */
  @action
  async sendMessage(userMessage) {
    if (!userMessage || !userMessage.trim()) {
      return;
    }

    if (!this.currentChat) {
      await this.createNewChat();
    }

    this.isLoading = true;

    try {
      // Get current messages array or initialize empty
      const currentMessages = this.currentChat.modules.messages || [];

      // Append user message
      const updatedMessages = [
        ...currentMessages,
        {
          role: 'user',
          content: userMessage.trim(),
        },
      ];

      // Update chat with user message immediately
      this.currentChat.modules = {
        ...this.currentChat.modules,
        messages: updatedMessages,
      };

      // Update title if this is the first message
      if (currentMessages.length === 0) {
        const title =
          userMessage.length > 50
            ? userMessage.substring(0, 50) + '...'
            : userMessage;
        this.currentChat.modules = {
          ...this.currentChat.modules,
          title: title,
        };
      }

      // Get current blueprint and frontend structure
      const currentBlueprint = this.getCurrentBlueprint();
      const currentFrontendStructure = this.getCurrentFrontendStructure();

      // Call AI API
      const response = await fetch('http://localhost:8000/api/v1/chat-types', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages,
          types_json: currentBlueprint,
          frontend_structure: currentFrontendStructure,
          mode: this.currentMode,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      // Log the full API response for debugging
      console.log('AI Chat API Response:', data);

      // Update chat with full conversation history from response
      if (data.messages) {
        this.currentChat.modules = {
          ...this.currentChat.modules,
          messages: data.messages,
        };
      }

      // Save the chat
      await this.currentChat.save();

      // If types_json is returned, store it for confirmation
      if (data.types_json) {
        console.log('types_json received from API:', data.types_json);
        this.pendingTypesJson = data.types_json;
        console.log('pendingTypesJson set to:', this.pendingTypesJson);
      } else {
        console.log('No types_json in API response');
      }

      // If frontend_structure is returned, store it and save to chat
      if (data.frontend_structure) {
        console.log('frontend_structure received from API:', data.frontend_structure);
        this.pendingFrontendStructure = data.frontend_structure;
        
        // Save to chat modules
        this.currentChat.modules = {
          ...this.currentChat.modules,
          frontend_structure: data.frontend_structure,
        };
        
        // Save the chat again with frontend_structure
        await this.currentChat.save();
      } else {
        console.log('No frontend_structure in API response');
      }

      this.isLoading = false;
    } catch (error) {
      console.error('Error sending message:', error);
      this.isLoading = false;

      // Add error message to chat
      const errorMessages = [
        ...(this.currentChat.modules.messages || []),
        {
          role: 'assistant',
          content:
            'Sorry, I encountered an error communicating with the AI service. Please try again.',
        },
      ];

      this.currentChat.modules = {
        ...this.currentChat.modules,
        messages: errorMessages,
      };

      await this.currentChat.save();
    }
  }

  /**
   * Apply the pending types_json using blueprints service
   */
  @action
  async applyTypesJson() {
    if (!this.pendingTypesJson) {
      return;
    }

    try {
      // Use the blueprints service's revertBlueprint method
      // This handles loading state, saving, and page reload
      await this.blueprints.revertBlueprint(this.pendingTypesJson);
    } catch (error) {
      console.error('Error applying types_json:', error);
    } finally {
      this.pendingTypesJson = null;
    }
  }

  /**
   * Cancel applying pending types_json
   */
  @action
  cancelApplyTypesJson() {
    this.pendingTypesJson = null;
  }
}
