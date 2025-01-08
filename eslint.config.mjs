import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.test.{js,ts}', '**/__tests__/**/*.{js,ts}'],
    plugins: {
      jest: {
        extends: ['plugin:jest/recommended'],
        languageOptions: { globals: globals.jest },
      },
    },
  },
  { ignores: ['coverage/**', 'node_modules/*', '**/jest.config.js'] },
];
