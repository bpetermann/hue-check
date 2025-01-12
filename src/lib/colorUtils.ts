import { cssNamedColors } from './cssNamedColors';

export const namedColorToRgb = (
  color: string
): [number, number, number] | null => {
  const hex = cssNamedColors[color.toLowerCase()];
  return hex ? hexToRgb(hex) : null;
};

export const hexToRgb = (hex: `#${string}`): [number, number, number] => [
  parseInt(hex.slice(1, 3), 16),
  parseInt(hex.slice(3, 5), 16),
  parseInt(hex.slice(5, 7), 16),
];

export const expandShortHex = (hex: `#${string}`): `#${string}` =>
  hex.length === 4
    ? (hex
        .split('')
        .map((h, i) => (i > 0 ? h + h : h))
        .join('') as `#${string}`)
    : hex;

export const isHex = (color: string): color is `#${string}` =>
  /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);

export const convertToRgb = (color: string): [number, number, number] | null =>
  isHex(color) ? hexToRgb(expandShortHex(color)) : namedColorToRgb(color);
