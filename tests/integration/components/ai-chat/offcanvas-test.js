import { module, test } from 'qunit';
import { setupRenderingTest } from 'junction/tests/helpers';
import { render, click, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ai-chat/offcanvas', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders offcanvas with correct structure', async function (assert) {
        await render(hbs`<AiChat::Offcanvas />`);

        assert.dom('.offcanvas').exists();
        assert.dom('.offcanvas-header').containsText('AI Assistant');
        assert.dom('.offcanvas-body').exists();
        assert.dom('textarea').exists();
        assert.dom('button[type="submit"]').exists();
    });

    test('it shows empty state when no messages', async function (assert) {
        await render(hbs`<AiChat::Offcanvas />`);

        assert
            .dom('.text-center.text-muted')
            .containsText('Start a conversation');
    });

    test('it displays messages after sending', async function (assert) {
        await render(hbs`<AiChat::Offcanvas />`);

        await fillIn('textarea', 'Test message');
        await click('button[type="submit"]');

        // Should display user message
        assert.dom('.card.bg-primary.text-white').exists();
    });

    test('send button is disabled when textarea is empty', async function (assert) {
        await render(hbs`<AiChat::Offcanvas />`);

        assert.dom('button[type="submit"]').isDisabled();

        await fillIn('textarea', 'Some text');
        assert.dom('button[type="submit"]').isNotDisabled();
    });

    test('it shows typing indicator when AI is responding', async function (assert) {
        await render(hbs`<AiChat::Offcanvas />`);

        await fillIn('textarea', 'Hello AI');
        await click('button[type="submit"]');

        // Should show typing indicator (animated dots)
        assert.dom('.badge.bg-secondary.rounded-circle').exists();
    });

    test('clear button appears only when messages exist', async function (assert) {
        await render(hbs`<AiChat::Offcanvas />`);

        // No clear button initially
        assert
            .dom('button')
            .doesNotContainText('Clear chat', 'Clear button should not exist initially');

        await fillIn('textarea', 'Test message');
        await click('button[type="submit"]');

        // Clear button should appear
        assert.dom('button').containsText('Clear chat');
    });

    test('it has correct offcanvas attributes', async function (assert) {
        await render(hbs`<AiChat::Offcanvas />`);

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
});

