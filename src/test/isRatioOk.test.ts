import { isRatioOk } from '../lib/isRatioOk';

describe('Is Ratio Ok', () => {
  test('Should return "undefined" if first color is not valid', () =>
    expect(isRatioOk('', '#000')).toEqual(undefined));

  test('Should return "undefined" if second color is not valid', () =>
    expect(isRatioOk('#000', '')).toEqual(undefined));

  test('Ratio between #426144 and #ACC8E5 is not sufficent for small Text and level"AAA"', () =>
    expect(isRatioOk('#426144', '#ACC8E5')).toEqual(false));

  test('Ratio between #426144 and #ACC8E5 is sufficent for large Text and level"AA"', () => {
    expect(isRatioOk('#426144', '#ACC8E5', 'AA', 18)).toEqual(true);
  });

  test('Ratio between papayawhip and #000 is sufficent for large Text and level"AA"', () => {
    expect(isRatioOk('papayawhip', '#000', 'AA', 18)).toEqual(true);
  });

  test('Ratio between #EE1616 and #1900FF is not sufficent for large Text and level"AA"', () => {
    expect(isRatioOk('#EE1616', '#1900FF', 'AA', 18)).toEqual(false);
  });
});
