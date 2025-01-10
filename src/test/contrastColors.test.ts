import { contrastColors } from '../lib/contrastColors';

describe('contrastColors', () => {
  test('Should return 17 colors for "white" with AAA level and small text', () => {
    const result = contrastColors('white', 'AAA', 'small');
    expect(result.length).toEqual(17);
  });

  test('Should return 89 colors for "black" with AAA level and small text', () => {
    const result = contrastColors('black', 'AAA', 'small');
    expect(result.length).toEqual(89);
  });

  test('Should return more colors for AA level compared to AAA level for "white"', () => {
    const resultAA = contrastColors('white', 'AA', 'small');
    const resultAAA = contrastColors('white', 'AAA', 'small');
    expect(resultAA.length).toBeGreaterThan(resultAAA.length);
  });

  test('Should handle invalid color gracefully by returning an empty array', () => {
    const result = contrastColors('invalidColor', 'AAA', 'small');
    expect(result).toEqual([]);
  });

  test('Should handle large text size correctly', () => {
    const result = contrastColors('white', 'AAA', 'large');
    expect(result.length).toBe(17);
  });

  test('Should return an empty array if no colors meet the criteria', () => {
    const result = contrastColors('', 'AAA', 'small');
    expect(result).toEqual([]);
  });
});
