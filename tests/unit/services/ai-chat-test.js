import { module, test } from 'qunit';
import { setupTest } from 'junction/tests/helpers';

module('Unit | Service | ai-chat', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let service = this.owner.lookup('service:ai-chat');
    assert.ok(service);
  });

  test('it has required properties', function (assert) {
    let service = this.owner.lookup('service:ai-chat');
    assert.strictEqual(service.currentChat, null, 'currentChat starts as null');
    assert.ok(Array.isArray(service.allChats), 'allChats is an array');
    assert.strictEqual(service.isLoading, false, 'isLoading starts as false');
    assert.strictEqual(
      service.pendingTypesJson,
      null,
      'pendingTypesJson starts as null',
    );
  });

  test('getCurrentBlueprint filters system types', function (assert) {
    let service = this.owner.lookup('service:ai-chat');
    let typesService = this.owner.lookup('service:types');

    // Mock types.json with both system and user types
    typesService.json = {
      modules: {
        webapp: { label: 'Webapp' },
        deleted_record: { label: 'Deleted' },
        file_record: { label: 'File' },
        ai_chat: { label: 'AI Chat' },
        my_custom_type: { label: 'Custom Type' },
        another_type: { label: 'Another Type' },
      },
    };

    const blueprint = service.getCurrentBlueprint();

    // Should only include user types
    assert.ok(blueprint.my_custom_type, 'includes my_custom_type');
    assert.ok(blueprint.another_type, 'includes another_type');

    // Should exclude system types
    assert.notOk(blueprint.webapp, 'excludes webapp');
    assert.notOk(blueprint.deleted_record, 'excludes deleted_record');
    assert.notOk(blueprint.file_record, 'excludes file_record');
    assert.notOk(blueprint.ai_chat, 'excludes ai_chat');
  });

  test('cancelApplyTypesJson clears pendingTypesJson', function (assert) {
    let service = this.owner.lookup('service:ai-chat');

    service.pendingTypesJson = { some: 'data' };
    assert.ok(service.pendingTypesJson, 'pendingTypesJson is set');

    service.cancelApplyTypesJson();
    assert.strictEqual(
      service.pendingTypesJson,
      null,
      'pendingTypesJson is cleared',
    );
  });
});
