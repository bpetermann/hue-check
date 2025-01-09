export const luminance = (rgb: [number, number, number]) => {
  const [r, g, b] = rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return r * 0.2126 + g * 0.7152 + b * 0.0722;
};

export const contrastRatio = (lum1: number, lum2: number) =>
  lum1 > lum2 ? (lum1 + 0.05) / (lum2 + 0.05) : (lum2 + 0.05) / (lum1 + 0.05);

const getRatio = (level: 'AA' | 'AAA', textSize: 'small' | 'large') =>
  level === 'AAA'
    ? textSize === 'small'
      ? 7
      : 4.5
    : textSize === 'small'
    ? 4.5
    : 3;

export const meetsContrastRequirement = (
  contrastRatio: number,
  level: 'AA' | 'AAA',
  textSize: 'small' | 'large'
): boolean => contrastRatio >= getRatio(level, textSize);
