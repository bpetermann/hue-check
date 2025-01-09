import { fontSize } from '../lib/fontUtils';

describe('Font Utils', () => {
  test('Font size "18px" is considered large', () =>
    expect(fontSize('18px')).toEqual('large'));

  test('Font size 18 is considered large', () =>
    expect(fontSize(18)).toEqual('large'));

  test('Undefined font size defaults to small', () =>
    expect(fontSize(undefined)).toEqual('small'));

  test('Font size 12 is considered small', () =>
    expect(fontSize(12)).toEqual('small'));
});
