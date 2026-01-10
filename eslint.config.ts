import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    ignores: ['dist/'],
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    files: ['**/*.{js,cjs,mjs}'],
    ...eslint.configs.recommended,
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.{ts}'],
    extends: tseslint.configs.recommended,
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.vue'],
    extends: pluginVue.configs['flat/vue2-recommended'],
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    language: 'css/css',
    extends: ['css/recommended'],
  },
  eslintConfigPrettier,
]);
