import { contrastColors } from '../lib/contrastColors';

describe('contrastColors', () => {
  test('Should return 17 colors for "white" with AAA level and small text', () => {
    const result = contrastColors('white', 'AAA', '12px');
    expect(result.length).toEqual(17);
  });

  test('Should return 89 colors for "black" with AAA level and small text', () => {
    const result = contrastColors('black', 'AAA', '12px');
    expect(result.length).toEqual(89);
  });

  test('Should return 89 colors for "white" with alpha 0', () => {
    const result = contrastColors('#fff0', 'AAA', '12px');
    expect(result.length).toEqual(89);
  });

  test('Should return more colors for AA level compared to AAA level for "white"', () => {
    const resultAA = contrastColors('white', 'AA', 12);
    const resultAAA = contrastColors('white', 'AAA', 12);
    expect(resultAA.length).toBeGreaterThan(resultAAA.length);
  });

  test('Should return more colors for large text compared to small text', () => {
    const resultLarge = contrastColors('cyan', 'AA', 18);
    const resultSmall = contrastColors('cyan', 'AA', 12);

    expect(resultLarge.length).toBeGreaterThan(resultSmall.length);
  });

  test('Should handle invalid color gracefully by returning an empty array', () => {
    const result = contrastColors('invalidColor', 'AAA', '12px');
    expect(result).toEqual([]);
  });

  test('Should handle all possible variations of a color', () => {
    const result1 = contrastColors('white', 'AAA', 8);
    const result2 = contrastColors('WHITE', 'AAA', 8);
    const result3 = contrastColors('#fff', 'AAA', 8);
    const result4 = contrastColors('#ffffff', 'AAA', 8);
    const result5 = contrastColors('#FFF', 'AAA', 8);
    const result6 = contrastColors('#FFFFFF', 'AAA', 8);

    [result1, result2, result3, result4, result5, result6].forEach((result) => {
      expect(result.length).toBe(17);
    });
  });

  test('Should handle all possible variations of a level', () => {
    const result1 = contrastColors('#fff', 'AAA', 8);
    const result2 = contrastColors('#fff', 'AA', 8);
    const result3 = contrastColors('#fff');

    [result1, result2, result3].forEach((result) => {
      expect(result.length).toBeGreaterThan(0);
    });
  });

  test('Should return an empty array if no colors meet the criteria', () => {
    const result = contrastColors('', 'AAA', '12px');
    expect(result).toEqual([]);
  });
});
