import { cssNamedColors } from './cssNamedColors';

export const namedColorToRgb = (color: string): number[] | null => {
  const hex = cssNamedColors[color.toLowerCase()];
  return hex ? hexToRgb(hex) : null;
};

const calculateAlpha = (num: number) => +(num / 255).toFixed(5);

export const hexToRgb = (hex: `#${string}`): number[] => {
  const rgba = [];

  for (let i = 1; i <= hex.length - 2; i += 2)
    rgba.push(parseInt(hex.slice(i, i + 2), 16));

  const [r, g, b, a] = rgba;

  return [r, g, b, ...(a !== undefined ? [calculateAlpha(a)!] : [])];
};

export const expandShortHex = (hex: `#${string}`) =>
  hex.length === 4 || hex.length === 5
    ? (hex
        .split('')
        .map((h, i) => (i > 0 ? h + h : h))
        .join('') as `#${string}`)
    : hex;

export const isHex = (color: string): color is `#${string}` =>
  /^#([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(color);

export const convertToRgb = (color: string): number[] | null => {
  if (!isHex(color)) return namedColorToRgb(color);

  const hex = expandShortHex(color);

  return hexToRgb(hex);
};
