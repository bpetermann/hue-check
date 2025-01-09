import { convertToRgb } from '../lib/colorUtils';
import {
  contrastRatio,
  luminance,
  meetsContrastRequirement,
} from '../lib/luminanceUtils';

describe('Luminance and Contrast Helpers', () => {
  // Luminance
  test('Luminance of "black" is 0', () =>
    expect(luminance([0, 0, 0])).toEqual(0));

  test('Luminance of "white" is 1', () =>
    expect(luminance([255, 255, 255])).toEqual(1));

  // Contrast Ratio
  test('Contrast ratio of #112A46 and #ACC8E5 is close to 8.42', () => {
    const color1 = convertToRgb('#112A46');
    const color2 = convertToRgb('#ACC8E5');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(contrastRatio(luminance(color1), luminance(color2))).toBeCloseTo(
      8.42
    );
  });

  test('Contrast ratio of "cyan" and "darkmagenta" is close to 6.78', () => {
    const color1 = convertToRgb('cyan');
    const color2 = convertToRgb('darkmagenta');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(contrastRatio(luminance(color1), luminance(color2))).toBeCloseTo(
      6.78
    );
  });

  test('Contrast ratio of "white" and "#000" is 21', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(contrastRatio(luminance(color1), luminance(color2))).toBeCloseTo(21);
  });

  test('Contrast ratio is symmetrical regardless of color order', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(contrastRatio(luminance(color1), luminance(color2))).toEqual(
      contrastRatio(luminance(color2), luminance(color1))
    );
  });

  // Contrast Requirement
  test('Contrast requirement passes for "white" and "#000" with AA small text', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    const ratio = contrastRatio(luminance(color1), luminance(color2));
    expect(meetsContrastRequirement(ratio, 'AA', 'small')).toEqual(true);
  });
});
