import { cssNamedColors } from '../lib/cssNamedColors';

describe('cssNamedColors', () => {
  test('"blue" returns "#0000ff"', () =>
    expect(cssNamedColors['blue']).toBe('#0000ff'));

  test('"goldenrod" returns "#daa520"', () =>
    expect(cssNamedColors['goldenrod']).toBe('#daa520'));

  test('"gray" returns "#808080"', () =>
    expect(cssNamedColors['gray']).toBe('#808080'));

  test('"grey" equals "gray"', () =>
    expect(cssNamedColors['grey']).toEqual(cssNamedColors['gray']));

  test('"khaki" returns "#f0e68c"', () =>
    expect(cssNamedColors['khaki']).toBe('#f0e68c'));

  test('"limegreen" returns "#32cd32"', () =>
    expect(cssNamedColors['limegreen']).toBe('#32cd32'));

  test('"olive" returns "#808000"', () =>
    expect(cssNamedColors['olive']).toBe('#808000'));

  test('"seashell" returns "#fff5ee"', () =>
    expect(cssNamedColors['seashell']).toBe('#fff5ee'));

  test('"yellowgreen" returns "#9acd32"', () =>
    expect(cssNamedColors['yellowgreen']).toBe('#9acd32'));

  test('"white" returns "#ffffff"', () =>
    expect(cssNamedColors['white']).toBe('#ffffff'));
});
