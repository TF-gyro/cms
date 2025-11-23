import { module, test } from 'qunit';
import { setupRenderingTest } from 'junction/tests/helpers';
import { render, waitFor } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

// Mock AI Chat Service
class MockAiChatService extends Service {
  @tracked currentChat = {
    modules: {
      title: 'Test Chat',
      messages: [],
    },
  };
  @tracked allChats = [];
  @tracked isLoading = false;
  @tracked pendingTypesJson = null;

  async loadChats() {
    this.allChats = [this.currentChat];
  }

  async createNewChat() {
    const newChat = {
      modules: {
        title: 'New Chat',
        messages: [],
      },
    };
    this.currentChat = newChat;
    this.allChats = [newChat, ...this.allChats];
  }

  selectChat(chat) {
    this.currentChat = chat;
  }

  async sendMessage(message) {
    // Mock implementation - just add the message
    this.currentChat.modules.messages = [
      ...this.currentChat.modules.messages,
      { role: 'user', content: message },
    ];
  }

  cancelApplyTypesJson() {
    this.pendingTypesJson = null;
  }
}

module('Integration | Component | ai-chat/offcanvas', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('service:ai-chat', MockAiChatService);
    this.owner.register('service:store', Service);
  });

  test('it renders offcanvas with correct structure', async function (assert) {
    await render(hbs`<AiChat::Offcanvas />`);

    await waitFor('.offcanvas');

    assert.dom('.offcanvas').exists();
    assert.dom('.offcanvas-header').exists();
    assert.dom('.offcanvas-body').exists();
    assert.dom('textarea').exists();
    assert.dom('button[type="submit"]').exists();
  });

  test('it shows empty state when no messages', async function (assert) {
    await render(hbs`<AiChat::Offcanvas />`);

    await waitFor('.text-center.text-muted');

    assert.dom('.text-center.text-muted').containsText('Start a conversation');
  });

  test('send button is disabled when textarea is empty', async function (assert) {
    await render(hbs`<AiChat::Offcanvas />`);

    await waitFor('button[type="submit"]');

    assert.dom('button[type="submit"]').isDisabled();
  });

  test('it has correct offcanvas attributes', async function (assert) {
    await render(hbs`<AiChat::Offcanvas />`);

    await waitFor('.offcanvas');

    assert.dom('.offcanvas').hasAttribute('id', 'aiChatOffcanvas');
    assert
      .dom('.offcanvas')
      .hasAttribute('data-bs-scroll', 'true', 'Should allow body scrolling');
    assert
      .dom('.offcanvas')
      .hasAttribute('data-bs-backdrop', 'true', 'Should have backdrop');
    assert
      .dom('.offcanvas')
      .hasClass('offcanvas-end', 'Should slide from right');
  });

  test('it displays chat dropdown with current chat title', async function (assert) {
    await render(hbs`<AiChat::Offcanvas />`);

    await waitFor('.dropdown');

    assert.dom('.dropdown').exists();
    assert.dom('.dropdown button').containsText('Test Chat');
  });

  test('it includes modal component', async function (assert) {
    await render(hbs`<AiChat::Offcanvas />`);

    await waitFor('#applyTypesModal');

    assert.dom('#applyTypesModal').exists();
  });
});
