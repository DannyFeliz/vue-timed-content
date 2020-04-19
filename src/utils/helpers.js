// @ts-check
import { DateTime } from "luxon";
/**
 *
 * @param {string} timeZone
 * @return Boolean
 */
export function isValidTimeZone(timeZone) {
  const date = DateTime.local().setZone(timeZone);
  return date.isValid;
}

/**
 *
 * @param {Date} date
 * @returns Boolean
 */
export function isValidDate(date) {
  const currentDate = DateTime.fromJSDate(date);
  return currentDate.isValid;
}
