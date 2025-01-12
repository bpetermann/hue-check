import { convertToPx, fontSize } from '../lib/fontUtils';

describe('Font Utils', () => {
  // Convert to Px
  test('Font size "18px" should return 18', () =>
    expect(convertToPx('18px')).toEqual(18));

  test('Font size 18 should return 18(px)', () =>
    expect(convertToPx('18')).toEqual(18));

  test('Font size "1rem" should return 16', () =>
    expect(convertToPx('1rem')).toEqual(16));

  test('Font size "0.813rem" should return 13(px)', () =>
    expect(convertToPx('0.813rem')).toEqual(13.008));

  test('Font size "0.8.008em" should return 13(px)', () =>
    expect(convertToPx('0.813em')).toEqual(13.008));

  test('Invalid string "" should return 13(px)', () =>
    expect(convertToPx('')).toEqual(NaN));

  // Font size
  test('Font size "18px" is considered large', () =>
    expect(fontSize('18px')).toEqual('large'));

  test('Font size 18 is considered large', () =>
    expect(fontSize(18)).toEqual('large'));

  test('Undefined font size defaults to small', () =>
    expect(fontSize(undefined)).toEqual('small'));

  test('Font size 12 is considered small', () =>
    expect(fontSize(12)).toEqual('small'));
});
