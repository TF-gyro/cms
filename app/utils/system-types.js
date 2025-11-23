/**
 * System Types Utility
 *
 * Centralized definition of system/reserved types in Junction CMS.
 * These types are excluded from user-facing operations like blueprint generation,
 * type filtering, and certain UI interactions.
 */

export const SYSTEM_TYPES = [
  'webapp',
  'deleted_record',
  'file_record',
  'apikey_record',
  'platform_record',
  'blueprint_record',
  'ai_chat',
];

/**
 * Check if a type slug is a system type
 * @param {string} typeSlug - The type slug to check
 * @returns {boolean} - True if the type is a system type
 */
export function isSystemType(typeSlug) {
  if (!typeSlug || typeof typeSlug !== 'string') {
    return false;
  }
  return SYSTEM_TYPES.includes(typeSlug);
}

/**
 * Check if a type slug is a user-created type (not a system type)
 * @param {string} typeSlug - The type slug to check
 * @returns {boolean} - True if the type is a user type
 */
export function isUserType(typeSlug) {
  return !isSystemType(typeSlug);
}

/**
 * Filter out system types from a types object
 * @param {Object} typesObject - Object with type slugs as keys
 * @returns {Object} - New object with system types removed
 */
export function filterSystemTypes(typesObject) {
  if (!typesObject || typeof typesObject !== 'object') {
    return {};
  }

  const filtered = {};
  Object.entries(typesObject).forEach(([slug, type]) => {
    if (!isSystemType(slug)) {
      filtered[slug] = type;
    }
  });
  return filtered;
}

/**
 * Get only user-created types from a types object
 * Alias for filterSystemTypes for better readability
 * @param {Object} typesObject - Object with type slugs as keys
 * @returns {Object} - New object with only user types
 */
export function getUserTypes(typesObject) {
  return filterSystemTypes(typesObject);
}
