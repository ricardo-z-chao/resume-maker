import js from '@eslint/js';
import ts from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from '@vue/eslint-config-typescript';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';

export default defineConfigWithVueTs([
  globalIgnores(['dist/']),
  {
    name: 'js',
    files: ['**/*.js'],
    ...js.configs.recommended,
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    name: 'ts',
    files: ['**/*.ts'],
    extends: [ts.configs.recommended],
  },
  {
    name: 'vue',
    files: ['**/*.vue'],
    extends: [
      pluginVue.configs['flat/vue2-recommended'],
      vueTsConfigs.recommended,
    ],
  },
  eslintConfigPrettier,
]);
