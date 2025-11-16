import { module, test } from 'qunit';
import { setupRenderingTest } from 'junction/tests/helpers';
import { render, click, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ai-chat/chatbox', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders with empty state', async function (assert) {
        await render(hbs`<AiChat::Chatbox />`);

        assert.dom('.card-header').containsText('AI Assistant');
        assert
            .dom('.text-center.text-muted')
            .containsText('Start a conversation with the AI assistant');
        assert.dom('textarea').exists();
        assert.dom('button[type="submit"]').exists();
    });

    test('it shows typing indicator when AI is responding', async function (assert) {
        await render(hbs`<AiChat::Chatbox />`);

        await fillIn('textarea', 'Hello AI');
        await click('button[type="submit"]');

        // Should show typing indicator
        assert.dom('.badge.bg-light.text-primary').containsText('Typing...');
    });

    test('it displays messages after sending', async function (assert) {
        await render(hbs`<AiChat::Chatbox />`);

        await fillIn('textarea', 'Test message');
        await click('button[type="submit"]');

        // Should display user message
        assert.dom('.card.bg-primary.text-white').exists();
    });

    test('send button is disabled when textarea is empty', async function (assert) {
        await render(hbs`<AiChat::Chatbox />`);

        assert.dom('button[type="submit"]').isDisabled();

        await fillIn('textarea', 'Some text');
        assert.dom('button[type="submit"]').isNotDisabled();
    });

    test('it clears chat when clear button is clicked', async function (assert) {
        await render(hbs`<AiChat::Chatbox />`);

        await fillIn('textarea', 'Test message');
        await click('button[type="submit"]');

        // Mock the confirm dialog to return true
        window.confirm = () => true;

        await click('button[title="Clear chat"]');

        // Should show empty state again
        assert
            .dom('.text-center.text-muted')
            .containsText('Start a conversation with the AI assistant');
    });
});
