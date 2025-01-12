import { contrastRatio } from '../lib/contrastRatio';

describe('contrastRatio', () => {
  test('Returns correct ratio for high contrast colors', () =>
    expect(contrastRatio('#ffffff', '#000000')).toBe(21));

  test('Returns correct ratio for low contrast colors', () =>
    expect(contrastRatio('#888888', '#aaaaaa')).toBeCloseTo(1.525, 2));

  test('Handles named colors correctly', () =>
    expect(contrastRatio('white', 'black')).toBe(21));

  test('Handles mixed colors correctly', () =>
    expect(contrastRatio('blue', '#ffff00')).toBeCloseTo(8.0, 2));

  test('Returns correct ratio for #ff6347 and #ee82ee', () =>
    expect(contrastRatio('#ff6347', '#ee82ee')).toBeCloseTo(1.27, 2));

  test('Returns correct ratio for #808000 and #ffb6c1', () =>
    expect(contrastRatio('#808000', '#ffb6c1')).toBeCloseTo(2.539, 2));

  test('Returns `undefined` if one of the inputs is not a valid color', () => {
    [
      contrastRatio('#12', '#fff'),
      contrastRatio('#12345', '#fff'),
      contrastRatio('#1234567', '#fff'),
      contrastRatio('#12G', '#fff'),
      contrastRatio('#ZZZZZZ', '#fff'),
      contrastRatio('#12!3FF', '#fff'),
      contrastRatio('#12!3FF', '#fff'),
      contrastRatio('#123 45', '#fff'),
      contrastRatio('123456', '#fff'),
      contrastRatio('FFF', '#fff'),
      contrastRatio('#', '#fff'),
      contrastRatio('#12345678', '#fff'),
      contrastRatio('', '#fff'),
      contrastRatio('#00000000', '#fff'),
    ].forEach((result) => {
      expect(result).toBe(undefined);
    });
  });
});
