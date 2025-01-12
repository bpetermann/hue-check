import { isRatioOk } from '../lib/isRatioOk';

describe('Is Ratio Ok', () => {
  test('Should return "undefined" if first color is not valid', () =>
    expect(isRatioOk('', '#000')).toEqual(undefined));

  test('Should return "undefined" if second color is not valid', () =>
    expect(isRatioOk('#000', '')).toEqual(undefined));

  test('Ratio between #426144 and #ACC8E5 is not sufficent for small Text and level"AAA"', () =>
    expect(isRatioOk('#426144', '#ACC8E5')).toEqual(false));

  test('Ratio between #426144 and #ACC8E5 is not sufficent for large Text and level"AAA"', () =>
    expect(isRatioOk('#426144', '#ACC8E5', 'AAA', '18px')).toEqual(false));

  test('Ratio between #426144 and #ACC8E5 and text size via "px"', () => {
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', '18px')).toEqual(true);
  });

  test('Ratio between #426144 and #ACC8E5 and text size via "em"', () => {
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', '1.125em')).toEqual(true);
  });

  test('Ratio between #426144 and #ACC8E5 and text size via "rem"', () => {
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', '1.125rem')).toEqual(true);
  });

  test('Ratio between #426144 and #ACC8E5 and text size via number', () => {
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', 18)).toEqual(true);
  });

  test('Ratio between #426144 and #ACC8E5 and invalid text size', () => {
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', 'null')).toEqual(false);
  });

  test('Ratio between #EE1616 and #1900FF is not sufficent for large Text and level"AA"', () => {
    expect(isRatioOk('#EE1616', '#1900FF', 'AA', 18)).toEqual(false);
  });
});
