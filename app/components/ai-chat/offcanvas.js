import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { Modal } from 'bootstrap';

export default class AiChatOffcanvasComponent extends Component {
  @service aiChat;
  @service store;

  @tracked currentMessage = '';

  constructor() {
    super(...arguments);
    // Load chats on component initialization
    this.aiChat.loadChats();
  }

  /**
   * Get messages from current chat
   */
  get messages() {
    return this.aiChat.currentChat?.modules?.messages || [];
  }

  /**
   * Get current chat title
   */
  get chatTitle() {
    return this.aiChat.currentChat?.modules?.title || 'New Chat';
  }

  /**
   * Get all chats for dropdown
   */
  get allChats() {
    return this.aiChat.allChats;
  }

  /**
   * Check if AI is currently processing
   */
  get isTyping() {
    return this.aiChat.isLoading;
  }

  /**
   * Check if there's a pending types_json to apply
   */
  get hasPendingTypesJson() {
    return this.aiChat.pendingTypesJson !== null;
  }

  /**
   * Handle form submission
   */
  @action
  async handleSubmit(event) {
    event.preventDefault();

    if (!this.currentMessage.trim() || this.isTyping) {
      return;
    }

    const message = this.currentMessage.trim();
    this.currentMessage = '';

    await this.aiChat.sendMessage(message);

    console.log('After sendMessage - hasPendingTypesJson:', this.hasPendingTypesJson);
    console.log('pendingTypesJson value:', this.aiChat.pendingTypesJson);

    // Show modal if types_json was returned
    if (this.hasPendingTypesJson) {
      console.log('Attempting to show modal...');
      // Use Bootstrap's modal API directly
      const modalElement = document.getElementById('applyTypesModal');
      if (modalElement) {
        const modal = new Modal(modalElement);
        modal.show();
        console.log('Modal shown');
      } else {
        console.error('Modal element not found');
      }
    }

    // Scroll to bottom after message is added
    this.scrollToBottom();
  }

  /**
   * Handle keyboard shortcuts
   */
  @action
  handleKeyDown(event) {
    // Submit on Enter (without Shift)
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.handleSubmit(event);
    }
  }

  /**
   * Create a new chat
   */
  @action
  async handleNewChat() {
    await this.aiChat.createNewChat();
    this.currentMessage = '';
  }

  /**
   * Switch to a different chat
   */
  @action
  handleSelectChat(chat) {
    this.aiChat.selectChat(chat);
    this.currentMessage = '';
    this.scrollToBottom();
  }

  /**
   * Clear current chat messages
   */
  @action
  async clearChat() {
    if (!this.aiChat.currentChat) {
      return;
    }

    if (
      confirm(
        'Are you sure you want to clear this chat history? This cannot be undone.',
      )
    ) {
      this.aiChat.currentChat.modules = {
        ...this.aiChat.currentChat.modules,
        messages: [],
      };
      await this.aiChat.currentChat.save();
      this.currentMessage = '';
    }
  }

  /**
   * Scroll chat to bottom
   */
  @action
  scrollToBottom() {
    // Use setTimeout to ensure DOM has updated
    setTimeout(() => {
      const messageArea = document.querySelector(
        '#aiChatOffcanvas .message-area',
      );
      if (messageArea) {
        messageArea.scrollTop = messageArea.scrollHeight;
      }
    }, 100);
  }

}
