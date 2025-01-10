import { convertToRgb } from './colorUtils';
import { fontSize } from './fontUtils';
import {
  contrastRatio,
  luminance,
  meetsContrastRequirement,
} from './luminanceUtils';

/**
 * Determines if the contrast ratio between two colors meets the specified WCAG accessibility level.
 *
 * @param {string} color1 - The first color in hex format (e.g., `#ffffff`) or a named color (e.g., "red"). Invalid or missing colors result in `undefined`.
 * @param {string} color2 - The second color in hex format or a named color. Invalid or missing colors result in `undefined`.
 * @param {'AA' | 'AAA'} [level='AAA'] - The WCAG accessibility level ('AA' or 'AAA'). Defaults to 'AAA'.
 *   - 'AA': Requires a contrast ratio of at least 4.5:1 for small text and 3:1 for large text.
 *   - 'AAA': Requires a contrast ratio of at least 7:1 for small text and 4.5:1 for large text.
 * @param {string | number} [textSize] - The size of the text (e.g., '18px' or a number). Determines whether the text is "small" or "large".
 *   - Small: Less than 18px or regular weight.
 *   - Large: 18px or larger, or bold weight.
 *
 * @returns {boolean | undefined}
 *   - `true`: The contrast ratio meets the specified WCAG level.
 *   - `false`: The contrast ratio does not meet the specified WCAG level.
 *   - `undefined`: One or both colors are invalid.
 *
 * @example
 * // Check if #555555 on #ffffff meets AA level for small text
 * const isAccessible = isRatioOk('#555555', '#ffffff', 'AA', 'small'); // true
 *
 * @example
 * // Check if "blue" on "white" meets AAA level for large text
 * const isAccessible = isRatioOk('blue', 'white', 'AAA', 'large'); // true
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
  const convertedColor1 = convertToRgb(color1);
  const convertedColor2 = convertToRgb(color2);

  // Handle invalid color inputs
  if (!convertedColor1 || !convertedColor2) return undefined;

  // Calculate the contrast ratio
  const ratio = contrastRatio(
    luminance(convertedColor1),
    luminance(convertedColor2)
  );

  // Determine if the ratio meets the WCAG requirements
  return meetsContrastRequirement(ratio, level, fontSize(textSize));
};
