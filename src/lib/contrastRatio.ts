import { convertToRgb } from './colorUtils';
import { luminance, ratio } from './luminanceUtils';

/**
 * Determines the contrast ratio between two colors.
 *
 * @param {string} color1 - The first color in hex format (e.g., `#ffffff`) or a named color (e.g., "red").
 *                          If the color is invalid or missing, the function returns `undefined`.
 * @param {string} color2 - The second color in hex format or a named color.
 *                          If the color is invalid or missing, the function returns `undefined`.
 *
 * @returns {number | undefined}
 *   - `number`: The contrast ratio between the two provided colors, ranging from 1 (lowest contrast) to 21 (highest contrast).
 *   - `undefined`: Returned if one or both colors are invalid.
 *
 * @example
 * // Get the contrast ratio of "white" and "black"
 * const ratio = contrastRatio('white', '#000000'); // 21
 *
 * @example
 * // Handle invalid input
 * const ratio = contrastRatio('invalidColor', '#000000'); // undefined
 */

export const contrastRatio = (
  color1: string,
  color2: string
): number | undefined => {
  const convertedColor1 = convertToRgb(color1);
  const convertedColor2 = convertToRgb(color2);

  if (!convertedColor1 || !convertedColor2) return;

  return ratio(luminance(convertedColor1), luminance(convertedColor2));
};
