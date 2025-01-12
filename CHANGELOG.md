# Changelog

All notable changes to the "hue-check" library will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
