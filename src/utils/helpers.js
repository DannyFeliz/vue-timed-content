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

/**
 * @param {Date} date
 * @returns Boolean
 */
export function isValidDate(date) {
  return date instanceof Date && !isNaN(date.valueOf());
}
