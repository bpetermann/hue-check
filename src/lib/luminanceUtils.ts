export const luminance = (rgba: number[]) => {
  const [r, g, b, a = 1] = rgba;

  const lum = [r, g, b]
    .map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    })
    .reduce((acc, val, i) => acc + val * [0.2126, 0.7152, 0.0722][i], 0);

  return lum * a;
};

export const ratio = (lum1: number, lum2: number): number =>
  lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);

export const getRatio = (level: 'AA' | 'AAA', textSize: 'small' | 'large') =>
  level === 'AAA'
    ? textSize === 'small'
      ? 7
      : 4.5
    : textSize === 'small'
    ? 4.5
    : 3;

export const meetsContrastRequirement = (
  ratio: number,
  level: 'AA' | 'AAA',
  textSize: 'small' | 'large'
): boolean => ratio >= getRatio(level, textSize);
