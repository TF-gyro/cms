import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AiChatOffcanvasComponent extends Component {
    @tracked messages = [];
    @tracked currentMessage = '';
    @tracked isTyping = false;

    /**
     * Format timestamp for display
     */
    getTimestamp() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    }

    /**
     * Handle form submission
     */
    @action
    handleSubmit(event) {
        event.preventDefault();

        if (!this.currentMessage.trim() || this.isTyping) {
            return;
        }

        // Add user message
        this.messages = [
            ...this.messages,
            {
                role: 'user',
                content: this.currentMessage.trim(),
                timestamp: this.getTimestamp(),
            },
        ];

        // Store message for API call
        const userMessage = this.currentMessage.trim();

        // Clear input
        this.currentMessage = '';

        // Simulate AI response (replace with actual API call)
        this.sendToAI(userMessage);
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
     * Send message to AI and handle response
     * TODO: Replace with actual API integration
     */
    @action
    async sendToAI(message) {
        this.isTyping = true;

        try {
            // TODO: Replace this with actual API call
            // Example: const response = await fetch('/api/ai/chat', { ... });

            // Simulate API delay
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Mock response (replace with actual API response)
            const aiResponse = `I received your message: "${message}". This is a placeholder response. Integrate with your AI API here.`;

            // Add AI response
            this.messages = [
                ...this.messages,
                {
                    role: 'assistant',
                    content: aiResponse,
                    timestamp: this.getTimestamp(),
                },
            ];
        } catch (error) {
            console.error('Error sending message to AI:', error);

            // Add error message
            this.messages = [
                ...this.messages,
                {
                    role: 'assistant',
                    content:
                        'Sorry, I encountered an error. Please try again.',
                    timestamp: this.getTimestamp(),
                },
            ];
        } finally {
            this.isTyping = false;
        }
    }

    /**
     * Clear all chat messages
     */
    @action
    clearChat() {
        if (
            confirm(
                'Are you sure you want to clear the chat history? This cannot be undone.',
            )
        ) {
            this.messages = [];
            this.currentMessage = '';
        }
    }
}

