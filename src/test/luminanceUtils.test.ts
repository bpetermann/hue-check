import { convertToRgb } from '../lib/colorUtils';
import {
  getRatio,
  luminance,
  meetsContrastRequirement,
  ratio,
} from '../lib/luminanceUtils';

describe('Luminance and Contrast Helpers', () => {
  // Luminance
  test('Calculates luminance of black as 0', () =>
    expect(luminance([0, 0, 0])).toEqual(0));

  test('Calculates luminance of white as 1', () =>
    expect(luminance([255, 255, 255])).toEqual(1));

  // Contrast Ratio
  test('Calculates contrast ratio for #112A46 and #ACC8E5 as approximately 8.42', () => {
    const color1 = convertToRgb('#112A46');
    const color2 = convertToRgb('#ACC8E5');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(ratio(luminance(color1), luminance(color2))).toBeCloseTo(8.42);
  });

  test('Calculates contrast ratio for cyan and darkmagenta as approximately 6.78', () => {
    const color1 = convertToRgb('cyan');
    const color2 = convertToRgb('darkmagenta');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(ratio(luminance(color1), luminance(color2))).toBeCloseTo(6.78);
  });

  test('Calculates maximum contrast ratio (21) for white and black', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(ratio(luminance(color1), luminance(color2))).toEqual(21);
  });

  test('Ensures contrast ratio is symmetrical', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(ratio(luminance(color1), luminance(color2))).toEqual(
      ratio(luminance(color2), luminance(color1))
    );
  });

  // getRatio
  test('Returns correct contrast threshold for "AA" with small text', () =>
    expect(getRatio('AA', 'small')).toEqual(4.5));

  test('Returns correct contrast threshold for "AA" with large text', () =>
    expect(getRatio('AA', 'large')).toEqual(3));

  test('Returns correct contrast threshold for "AAA" with small text', () =>
    expect(getRatio('AAA', 'small')).toEqual(7));

  test('Returns correct contrast threshold for "AAA" with large text', () =>
    expect(getRatio('AAA', 'large')).toEqual(4.5));

  // Contrast Requirement
  test('Passes contrast requirement for white and black with AA small text', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    const contrastRatio = ratio(luminance(color1), luminance(color2));
    expect(meetsContrastRequirement(contrastRatio, 'AA', 'small')).toEqual(
      true
    );
  });
});
