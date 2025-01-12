import { convertToRgb } from '../lib/colorUtils';
import {
  getRatio,
  luminance,
  meetsContrastRequirement,
  ratio,
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

    expect(ratio(luminance(color1), luminance(color2))).toBeCloseTo(8.42);
  });

  test('Contrast ratio of "cyan" and "darkmagenta" is close to 6.78', () => {
    const color1 = convertToRgb('cyan');
    const color2 = convertToRgb('darkmagenta');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(ratio(luminance(color1), luminance(color2))).toBeCloseTo(6.78);
  });

  test('Contrast ratio of "white" and "#000" is 21', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(ratio(luminance(color1), luminance(color2))).toBeCloseTo(21);
  });

  test('Contrast ratio is symmetrical regardless of color order', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    expect(ratio(luminance(color1), luminance(color2))).toEqual(
      ratio(luminance(color2), luminance(color1))
    );
  });

  // getRatio
  test('Get the right ratio for "AA" and "small" textSize', () => {
    expect(getRatio('AA', 'small')).toEqual(4.5);
  });

  test('Get the right ratio for "AA" and "large" textSize', () => {
    expect(getRatio('AA', 'large')).toEqual(3);
  });

  test('Get the right ratio for "AAA" and "small" textSize', () => {
    expect(getRatio('AAA', 'small')).toEqual(7);
  });

  test('Get the right ratio for "AAA" and "large" textSize', () => {
    expect(getRatio('AAA', 'large')).toEqual(4.5);
  });

  // Contrast Requirement
  test('Contrast requirement passes for "white" and "#000" with AA small text', () => {
    const color1 = convertToRgb('white');
    const color2 = convertToRgb('#000');
    if (!color1 || !color2) throw new Error('Invalid colors');

    const contrastRatio = ratio(luminance(color1), luminance(color2));
    expect(meetsContrastRequirement(contrastRatio, 'AA', 'small')).toEqual(
      true
    );
  });
});
