import { contrastRatio } from './contrastRatio';
import { fontSize } from './fontUtils';
import { meetsContrastRequirement } from './luminanceUtils';

/**
 * Determines if the contrast ratio between two colors meets the specified WCAG accessibility level.
 *
 * @param {string} color1 - The first color in 3, 4, 6 or 8-digit hex format (e.g.,`#ffffff`) or a named color (e.g., "red").
 *   - Invalid or missing colors result in `undefined`.
 * @param {string} color2 - The second color in hex format or a named color.
 *   - Invalid or missing colors result in `undefined`.
 * @param {'AA' | 'AAA'} [level='AAA'] - The WCAG accessibility level ('AA' or 'AAA'). Defaults to 'AAA'.
 *   - 'AA': Requires a contrast ratio of at least 4.5:1 for small text and 3:1 for large text.
 *   - 'AAA': Requires a contrast ratio of at least 7:1 for small text and 4.5:1 for large text.
 * @param {string | number} [textSize] - The size of the text, which determines whether it is small or large. Defaults to small.
 *   - Supports `px` (e.g., "14px"), `em` (e.g., "1.125em"), `rem`, or a numeric value (e.g., `18`).
 *   - If omitted or invalid (e.g., `"invalidSize"`), the function defaults to treating the text as small.
 * @returns {boolean | undefined}
 *   - `true`: The contrast ratio meets the specified WCAG level.
 *   - `false`: The contrast ratio does not meet the specified WCAG level.
 *   - `undefined`: One or both colors are invalid.
 *
 * @example
 * // Valid input with small text
 * const isAccessible = isRatioOk('#555555', '#ffffff', 'AA', 12); // true
 *
 * @example
 * // Valid input with large text in pixels
 * const isAccessible = isRatioOk('blue', 'white', 'AAA', '18px'); // true
 *
 * @example
 * // Valid input with alpha set
 * const isAccessible = isRatioOk('#ffffff', '#0000'); // false
 *
 * @example
 * // Valid input with large text in em
 * const isAccessible = isRatioOk('blue', 'white', 'AAA', '1.125em'); // true
 *
 * @example
 * // Omitting text size (defaults to small text)
 * const isAccessible = isRatioOk('blue', 'white', 'AAA'); // true
 *
 * @example
 * // Invalid text size (defaults to small text)
 * const isAccessible = isRatioOk('blue', 'white', 'AAA', 'invalidSize'); // true
 *
 * @example
 * // Invalid color input
 * const isAccessible = isRatioOk('invalidColor', '#ffffff'); // undefined
 */

export const isRatioOk = (
  color1: string,
  color2: string,
  level: 'AA' | 'AAA' = 'AAA',
  textSize?: string | number
): boolean | undefined => {
  const ratio = contrastRatio(color1, color2);

  return !ratio
    ? undefined
    : meetsContrastRequirement(ratio, level, fontSize(textSize));
};
