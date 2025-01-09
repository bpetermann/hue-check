const PX = 'px';

const isLargeFont = (size: string | number | undefined) =>
  typeof size === 'string'
    ? size.endsWith(PX) && +size.split(PX)[0] >= 18
    : typeof size === 'number'
    ? size >= 18
    : false;

export const fontSize = (size: string | number | undefined) =>
  isLargeFont(size) ? 'large' : 'small';
