import { expandShortHex, isHex } from './colorUtils';
import { cssNamedColors } from './cssNamedColors';

/**
 * Converts a hex color code to its corresponding CSS named color (if available).
 *
 * @param {string} color - The hex color code (e.g., `#ff0000` or `#f00`).
 * @returns {string | undefined} The CSS named color if found, otherwise `undefined`.
 *
 * @example
 * toNamedColor("#ff0000"); // "red"
 * toNamedColor("#f00");    // "red"
 * toNamedColor("#abcdef"); // undefined
 */
export const hexToNamedColor = (color: string): string | undefined => {
  if (!isHex(color) || color.length === 5) return;

  const hex = expandShortHex(color);

  return Object.entries(cssNamedColors).find(
    ([_key, value]) => value === hex.toLowerCase()
  )?.[0];
};
