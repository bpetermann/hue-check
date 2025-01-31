# :art: Hue Check &middot; [![NPM version][npm-image]][npm-url] ![npm-typescript] ![GitHub License](https://img.shields.io/github/license/bpetermann/hue-check) ![NPM Downloads](https://img.shields.io/npm/dw/hue-check)

**Hue check** is a lightweight library for checking color contrast and generating accessible color palettes.

## Features

### :arrow_right: isRatioOk

- Determines if the contrast ratio between two colors meets the specified **WCAG accessibility level**.
- **Returns:**
  - `true` if the contrast ratio meets the specified WCAG level.
  - `false` if it doesn’t meet the level.
  - `undefined` if the input colors are invalid.

### :arrow_right: contrastColors

- Generates an array of CSS named colors that meet the specified contrast ratio requirements with a given color.
- **Returns:**
  - An array of CSS named colors.

### :arrow_right: contrastRatio

- Calculates the contrast ratio between two colors.
- **Returns:**
  - The contrast ratio between the two colors.
  - `undefined` if the input colors are invalid.

### :arrow_right: hexToNamedColor

- Converts a hex color code to its corresponding CSS named color.
- **Returns:**
  - The CSS named color if found, otherwise `undefined`.

## Example

```ts
import { contrastColors, contrastRatio, isRatioOk } from 'hue-check';

const sufficentRatio = isRatioOk('papayawhip', '#000'); // true
const contrastColor = contrastColors('papayawhip')?.[0] ?? ''; // "black"
const ratio = contrastRatio('white', '#000000'); // 21
const colorName = hexToNamedColor('#fff'); // "white"
```

## Contributing

Create a branch on your fork, add commits to your fork, and open a pull request from your fork to this repository.

## Changelog

To check full changelog click [here](https://github.com/bpetermann/hue-check/blob/main/CHANGELOG.md)

## License

[MIT][github-license-url]

[github-license-url]: https://github.com/bpetermann/hue-check/blob/main/LICENSE
[npm-url]: https://www.npmjs.com/package/hue-check
[npm-image]: https://img.shields.io/npm/v/hue-check
[npm-typescript]: https://img.shields.io/npm/types/hue-check
