import { module, test } from 'qunit';
import { setupRenderingTest } from 'junction/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ai-chat/apply-types-modal', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<AiChat::ApplyTypesModal />`);

    assert
      .dom('.modal')
      .exists('modal element exists')
      .hasAttribute('id', 'applyTypesModal', 'has correct id');
  });

  test('it has correct modal structure', async function (assert) {
    await render(hbs`<AiChat::ApplyTypesModal />`);

    assert.dom('.modal-header').exists('has modal header');
    assert
      .dom('.modal-title')
      .hasText('Apply Blueprint Changes', 'has correct title');
    assert.dom('.modal-body').exists('has modal body');
    assert.dom('.modal-footer').exists('has modal footer');
  });

  test('it has cancel and apply buttons', async function (assert) {
    await render(hbs`<AiChat::ApplyTypesModal />`);

    const buttons = this.element.querySelectorAll('.modal-footer button');
    assert.strictEqual(buttons.length, 2, 'has two buttons');

    assert
      .dom('.modal-footer button:first-child')
      .hasText('Cancel', 'first button is Cancel');
    assert
      .dom('.modal-footer button:last-child')
      .hasText('Apply Changes', 'second button is Apply Changes');
  });

  test('it displays information about blueprint changes', async function (assert) {
    await render(hbs`<AiChat::ApplyTypesModal />`);

    assert
      .dom('.alert-info')
      .exists('has info alert')
      .containsText(
        'AI has generated a new blueprint structure',
        'shows blueprint message',
      );

    assert
      .dom('.modal-body ul li')
      .exists({ count: 3 }, 'has three list items explaining changes');
  });
});
