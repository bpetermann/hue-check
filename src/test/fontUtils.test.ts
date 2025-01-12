import { convertToPx, fontSize, isLargeFont } from '../lib/fontUtils';

describe('Font Utils', () => {
  // is Large Font
  test('Font size "18px" is considered large', () =>
    expect(isLargeFont('18px')).toEqual(true));

  test('Font size 18 (number) is considered large', () =>
    expect(isLargeFont(18)).toEqual(true));

  test('Font size "1.125rem" is considered large (equivalent to 18px)', () =>
    expect(isLargeFont('1.125rem')).toEqual(true));

  test('Font size "1.125em" is considered large (equivalent to 18px)', () =>
    expect(isLargeFont('1.125em')).toEqual(true));

  test('Font size "17px" is not considered large', () =>
    expect(isLargeFont('17px')).toEqual(false));

  test('Font size 17 (number) is not considered large', () =>
    expect(isLargeFont(17)).toEqual(false));

  test('Font size "1.0625rem" is not considered large (equivalent to 17px)', () =>
    expect(isLargeFont('1.0625rem')).toEqual(false));

  test('Font size "1.0625em" is not considered large (equivalent to 17px)', () =>
    expect(isLargeFont('1.0625em')).toEqual(false));

  test('Undefined font size is not considered large', () =>
    expect(isLargeFont(undefined)).toEqual(false));

  test('Empty string font size is not considered large', () =>
    expect(isLargeFont('')).toEqual(false));

  test('Invalid font size "invalid" is not considered large', () =>
    expect(isLargeFont('invalid')).toEqual(false));

  test('Null input is not considered large', () =>
    expect(isLargeFont(null as unknown as string)).toEqual(false));

  // Convert to Px
  test('Converts "18px" to 18', () => expect(convertToPx('18px')).toEqual(18));

  test('Converts "1rem" to 16', () => expect(convertToPx('1rem')).toEqual(16));

  test('Converts "0.813em" to 13', () =>
    expect(convertToPx('0.813em')).toEqual(13.008));

  test('Converts invalid input to NaN', () =>
    expect(convertToPx('invalid')).toBeNaN());

  // Font Size
  test('Determines large text for font size "18px"', () =>
    expect(fontSize('18px')).toEqual('large'));

  test('Defaults to small for undefined size', () =>
    expect(fontSize(undefined)).toEqual('small'));
});
