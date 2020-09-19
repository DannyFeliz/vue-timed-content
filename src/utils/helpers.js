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

/**
 * @param {Date} date
 * @param {string} timezone
 *
 * @return Date
 * */
export function getTimeZonedDate(date, timezone) {
  if (!isValidDate(date)) {
    throw new Error("Invalid date");
  }

  if (!isValidTimeZone(timezone)) {
    throw new Error("Invalid timezone");
  }

  return new Date(date.toLocaleString("en-US", { timeZone: timezone }));
}
