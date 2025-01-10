# Hue Check

**Hue check** is a lightweight library for checking color contrast and generating accessible color palettes.

## Features

### isRatioOk

Determines if the contrast ratio between two colors meets the specified WCAG accessibility level.

**Parameters:**

- `color1` (string): The first color, as a hex code (e.g., `#000000`) or a CSS named color (e.g., `papayawhip`).
- `color2` (string): The second color, as a hex code or a CSS named color.
- `level` (`'AA' | 'AAA'`, optional): The WCAG accessibility level. Defaults to 'AAA'.
- `textSize` (string | number, optional): The size of the text, either as a number (e.g., `18`) or a string (e.g., `12px`).

**Returns:**

- `boolean | undefined`: `true` if the contrast ratio meets the specified WCAG level, false otherwise, or undefined if the input colors are invalid.

```ts
import { isRatioOk } from 'hue-check';

console.log(isRatioOk('papayawhip', '#000')); // true
```

### contrastColors

Generates an array of CSS named colors that meet the specified contrast requirements with a given color.

**Parameters:**

- `color` (string): The base color, as a hex code or a CSS named color.
- `level` (`AA` | `AAA`, optional): The WCAG accessibility level. Defaults to `AAA`.
- `textSize` (string | number, optional): The size of the text, either as a number (e.g., `18`) or a string (e.g., `12px`).

**Returns:**

- string[]: An array of CSS named colors that meet the specified contrast ratio requirements.

**Example:**

```ts
import { contrastColors } from 'hue-check';

console.log(contrastColors('papayawhip')); // ["black", "blue", ...]
```

## Contributing

Create a branch on your fork, add commits to your fork, and open a pull request from your fork to this repository.

## Changelog

To check full changelog click [here](https://github.com/bpetermann/hue-check/blob/main/CHANGELOG.md)

## License

[MIT][github-license-url]

[github-license-url]: https://github.com/bpetermann/hue-check/blob/main/LICENSE
