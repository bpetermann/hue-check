import { hexToNamedColor } from '../lib/hexToNamedColor';

describe('to named color', () => {
  test('Should return "white" for 6-digit hex', () =>
    expect(hexToNamedColor('#ffffff')).toEqual('white'));

  test('Should return "white" for 3-digit hex', () =>
    expect(hexToNamedColor('#fff')).toEqual('white'));

  test('Should return "undefined" for non hex string', () =>
    expect(hexToNamedColor('')).toEqual(undefined));

  test('Should return "undefined" for non named css color', () =>
    expect(hexToNamedColor('#123')).toEqual(undefined));
});
