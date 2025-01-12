const isLargeFont = (size: string | number | undefined) =>
  typeof size === 'string'
    ? convertToPx(size) >= 18
    : typeof size === 'number'
    ? size >= 18
    : false;

export const convertToPx = (size: string): number => {
  if (size.endsWith('rem') || size.endsWith('em')) {
    const value = parseFloat(size);
    return value * 16;
  }
  return parseFloat(size);
};

export const fontSize = (size: string | number | undefined) =>
  isLargeFont(size) ? 'large' : 'small';
