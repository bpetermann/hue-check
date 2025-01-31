import { isRatioOk } from '../lib/isRatioOk';

describe('isRatioOk', () => {
  test('Returns undefined if first color is invalid', () =>
    expect(isRatioOk('', '#000')).toEqual(undefined));

  test('Returns undefined if second color is invalid', () =>
    expect(isRatioOk('#000', '')).toEqual(undefined));

  test('Fails for insufficient contrast at AAA level for small text', () =>
    expect(isRatioOk('#426144', '#ACC8E5', 'AAA', '12px')).toEqual(false));

  test('Handles large text with valid contrast ratio at AA level', () =>
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', '18px')).toEqual(true));

  test('Handles text size in em units correctly', () =>
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', '1.125em')).toEqual(true));

  test('Handles invalid text size gracefully (defaults to small)', () =>
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', 'null')).toEqual(false));

  test('Handles mixed-case colors correctly', () =>
    expect(isRatioOk('WHITE', '#000')).toEqual(true));

  test('Handles alpha correctly', () =>
    expect(isRatioOk('#fff0', '#000')).toEqual(false));
});
