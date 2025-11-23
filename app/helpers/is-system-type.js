import { helper } from '@ember/component/helper';
import { isSystemType } from 'junction/utils/system-types';

/**
 * Template helper to check if a type slug is a system type
 *
 * Usage in templates:
 * {{#if (is-system-type @type.slug)}}
 *   This is a system type
 * {{/if}}
 *
 * {{#if (not (is-system-type type.slug))}}
 *   This is a user type
 * {{/if}}
 */
export default helper(function isSystemTypeHelper([typeSlug]) {
  return isSystemType(typeSlug);
});
