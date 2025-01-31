import {
  convertToRgb,
  expandShortHex,
  isHex,
  namedColorToRgb,
} from '../lib/colorUtils';

describe('Color Utils', () => {
  // namedColorToRgb
  test('Named color "black" returns [0, 0, 0]', () =>
    expect(namedColorToRgb('black')).toEqual([0, 0, 0]));

  test('Named color "white" returns [255, 255, 255]', () =>
    expect(namedColorToRgb('white')).toEqual([255, 255, 255]));

  test('Unknown named color returns null', () =>
    expect(namedColorToRgb('unknown')).toBeNull());

  // isHex
  test('Should return false if string is no valid hexcode', () => {
    [
      '#12',
      '#12345',
      '#1234567',
      '#12G',
      '#ZZZZZZ',
      '#12!3FF',
      '#12!3FF',
      '#123 45',
      '123456',
      'FFF',
      '#12x',
      '#',
      '',
    ].forEach((str) => {
      expect(isHex(str)).toBe(false);
    });
  });

  test('Should work for hexcode with alpha set', () => {
    ['#00f8', '#0000ffc0', '#0000', '#ffff', '#1234'].forEach((str) => {
      expect(isHex(str)).toBe(true);
    });
  });

  // expandShortHex
  test('Short hex "#000" expands to "#000000"', () =>
    expect(expandShortHex('#000')).toBe('#000000'));

  test('Short hex "#abc" expands to "#aabbcc"', () =>
    expect(expandShortHex('#abc')).toBe('#aabbcc'));

  test('Non-short hex is returned as-is', () =>
    expect(expandShortHex('#123456')).toBe('#123456'));

  // convertToRgb
  test('Hex color "#000" matches named color "black"', () =>
    expect(convertToRgb('#000')).toEqual(convertToRgb('black')));

  test('Hex color "#ffffff" matches named color "white"', () =>
    expect(convertToRgb('#ffffff')).toEqual(convertToRgb('white')));

  test('Short hex "#0ff" matches named color "cyan"', () =>
    expect(convertToRgb('#0ff')).toEqual(convertToRgb('cyan')));

  test('Invalid color input returns null', () =>
    expect(convertToRgb('not-a-color')).toBeNull());
});
