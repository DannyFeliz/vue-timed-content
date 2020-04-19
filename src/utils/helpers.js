// @ts-check
/**
 *
 * @param {string} timeZone
 * @return Boolean
 */
export function isValidTimeZone(timeZone) {
  try {
    Intl.DateTimeFormat(undefined, { timeZone });
    return true;
  } catch (ex) {
    return false;
  }
}
