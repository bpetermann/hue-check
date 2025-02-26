# Changelog

All notable changes to the "hue-check" library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2024-02-26

### Added

- Export `cssNamedColor`, an object containing all css named colors.

## [1.1.0] - 2024-01-21

### Added

- Support for alpha in CSS hex colors, now allowing 3, 4, 6, or 8-digit hex codes (`#RGB`, `#RGBA`, `#RRGGBB`, `#RRGGBBAA`).
- Contrast calculations now take transparency into account when determining WCAG compliance.
- **hexToNamedColor** - Converts a hex color code to its corresponding CSS named color (if available).

## [1.0.1] - 2024-01-12

### Fixed

- **contrastRatio** - Fixed an issue where entering a string resembling a hex code could return NaN.
- **contrastColors** - Enhanced the color parameter to support uppercase inputs.
- **isHex** - Improved the isHex function to reject strings starting with # that are not valid hex codes.

## [1.0.0] - 2024-01-12

### Added

- **contrastRatio** - Determines the contrast ratio between two colors.

### Changed

- **isRatioOk** - Added the possibility to specify the text size via “em” or “rem.

## [0.1.1] - 2024-01-11

### Changed

- Update docs

## [0.1.0] - 2024-01-10

### Added

- **isRatioOk** - Determines if the contrast ratio between two colors meets the specified WCAG accessibility level.
- **contrastColors** - Returns an array of color names that meet the specified contrast ratio requirements with a given color.

[0.1.0]: https://github.com/bpetermann/hue-check/releases/tag/v0.1.0
[1.0.0]: https://github.com/bpetermann/hue-check/releases/tag/v1.0.0
[1.0.1]: https://github.com/bpetermann/hue-check/releases/tag/v1.0.1
[1.1.0]: https://github.com/bpetermann/hue-check/releases/tag/v1.1.0
