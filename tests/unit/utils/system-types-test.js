import { module, test } from 'qunit';
import {
  SYSTEM_TYPES,
  isSystemType,
  isUserType,
  filterSystemTypes,
  getUserTypes,
} from 'junction/utils/system-types';

module('Unit | Utils | system-types', function () {
  test('SYSTEM_TYPES constant contains all expected system types', function (assert) {
    assert.deepEqual(SYSTEM_TYPES, [
      'webapp',
      'deleted_record',
      'file_record',
      'apikey_record',
      'platform_record',
      'blueprint_record',
      'ai_chat',
      'frontend_plan',
    ]);
    assert.strictEqual(SYSTEM_TYPES.length, 8);
  });

  test('isSystemType returns true for all system types', function (assert) {
    SYSTEM_TYPES.forEach((type) => {
      assert.true(
        isSystemType(type),
        `${type} should be identified as a system type`,
      );
    });
  });

  test('isSystemType returns false for user types', function (assert) {
    const userTypes = ['post', 'user', 'product', 'category', 'blog_post'];
    userTypes.forEach((type) => {
      assert.false(
        isSystemType(type),
        `${type} should not be identified as a system type`,
      );
    });
  });

  test('isSystemType handles edge cases', function (assert) {
    assert.false(isSystemType(''), 'Empty string should return false');
    assert.false(isSystemType(null), 'null should return false');
    assert.false(isSystemType(undefined), 'undefined should return false');
    assert.false(isSystemType(123), 'Number should return false');
    assert.false(isSystemType({}), 'Object should return false');
    assert.false(isSystemType([]), 'Array should return false');
  });

  test('isUserType returns true for user types', function (assert) {
    const userTypes = ['post', 'user', 'product', 'category'];
    userTypes.forEach((type) => {
      assert.true(
        isUserType(type),
        `${type} should be identified as a user type`,
      );
    });
  });

  test('isUserType returns false for system types', function (assert) {
    SYSTEM_TYPES.forEach((type) => {
      assert.false(
        isUserType(type),
        `${type} should not be identified as a user type`,
      );
    });
  });

  test('isUserType is inverse of isSystemType', function (assert) {
    const testTypes = [
      'webapp',
      'deleted_record',
      'post',
      'user',
      'file_record',
      'product',
    ];

    testTypes.forEach((type) => {
      assert.strictEqual(
        isUserType(type),
        !isSystemType(type),
        `isUserType(${type}) should be inverse of isSystemType(${type})`,
      );
    });
  });

  test('filterSystemTypes removes all system types from object', function (assert) {
    const typesObject = {
      webapp: { name: 'Webapp', slug: 'webapp' },
      deleted_record: { name: 'Deleted', slug: 'deleted_record' },
      post: { name: 'Post', slug: 'post' },
      file_record: { name: 'File', slug: 'file_record' },
      user: { name: 'User', slug: 'user' },
      apikey_record: { name: 'API Key', slug: 'apikey_record' },
      product: { name: 'Product', slug: 'product' },
    };

    const filtered = filterSystemTypes(typesObject);

    assert.deepEqual(
      Object.keys(filtered),
      ['post', 'user', 'product'],
      'Should only contain user types',
    );
    assert.strictEqual(
      filtered.post.name,
      'Post',
      'User types should be preserved',
    );
    assert.notOk(filtered.webapp, 'System types should be removed');
  });

  test('filterSystemTypes handles empty object', function (assert) {
    const filtered = filterSystemTypes({});
    assert.deepEqual(filtered, {}, 'Empty object should return empty object');
  });

  test('filterSystemTypes handles object with only system types', function (assert) {
    const typesObject = {
      webapp: { name: 'Webapp' },
      deleted_record: { name: 'Deleted' },
      file_record: { name: 'File' },
    };

    const filtered = filterSystemTypes(typesObject);
    assert.deepEqual(filtered, {}, 'Should return empty object');
  });

  test('filterSystemTypes handles edge cases', function (assert) {
    assert.deepEqual(
      filterSystemTypes(null),
      {},
      'null should return empty object',
    );
    assert.deepEqual(
      filterSystemTypes(undefined),
      {},
      'undefined should return empty object',
    );
    assert.deepEqual(
      filterSystemTypes('string'),
      {},
      'string should return empty object',
    );
  });

  test('getUserTypes is alias for filterSystemTypes', function (assert) {
    const typesObject = {
      webapp: { name: 'Webapp' },
      post: { name: 'Post' },
      file_record: { name: 'File' },
      user: { name: 'User' },
    };

    const filtered = filterSystemTypes(typesObject);
    const userTypes = getUserTypes(typesObject);

    assert.deepEqual(
      filtered,
      userTypes,
      'getUserTypes should return same result as filterSystemTypes',
    );
  });

  test('filterSystemTypes preserves nested structure', function (assert) {
    const typesObject = {
      webapp: { name: 'Webapp', modules: [] },
      post: {
        name: 'Post',
        modules: [{ input_slug: 'title', input_type: 'text' }],
      },
      file_record: { name: 'File', modules: [] },
    };

    const filtered = filterSystemTypes(typesObject);

    assert.strictEqual(
      filtered.post.modules.length,
      1,
      'Nested structure should be preserved',
    );
    assert.strictEqual(
      filtered.post.modules[0].input_slug,
      'title',
      'Nested data should be preserved',
    );
  });
});
