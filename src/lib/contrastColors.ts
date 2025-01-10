import { cssNamedColors } from './cssNamedColors';
import { isRatioOk } from './isRatioOk';

/**
 * Returns an array of color names that meet the specified contrast ratio requirements with a given color.
 *
 * @param {string} color - The base color in hex format (e.g., `#ffffff`) or a named color (e.g., "red").
 * @param {'AA' | 'AAA'} [level='AAA'] - The WCAG accessibility level ('AA' or 'AAA'). Defaults to 'AAA'.
 *   - 'AA': Requires a contrast ratio of at least 4.5:1 for small text and 3:1 for large text.
 *   - 'AAA': Requires a contrast ratio of at least 7:1 for small text and 4.5:1 for large text.
 * @param {string | number} [textSize] - The size of the text (e.g., '18px' or a number). Determines whether the text is "small" or "large".
 *   - Small: Less than 18pt or regular weight.
 *   - Large: 18pt or larger, or bold weight.
 *
 * @returns {string[]} An array of color names that meet the contrast ratio requirements with the given color.
 *
 * @example
 * // Get colors that meet AAA contrast ratio with "white" for small text
 * const colors = contrastColors('white', 'AAA', 'small'); // ['black', 'navy', ...]
 *
 * @example
 * // Get colors that meet AA contrast ratio with "#ff0000" for large text
 * const colors = contrastColors('#ff0000', 'AA', 'large'); // ['white', 'cyan', ...]
 */
export const contrastColors = (
  color: string,
  level: 'AA' | 'AAA' = 'AAA',
  textSize?: string
): string[] => {
  if (!color.startsWith('#') && !cssNamedColors[color]) return [];

  return Object.keys(cssNamedColors).filter((key) =>
    isRatioOk(color, key, level, textSize)
  );
};
