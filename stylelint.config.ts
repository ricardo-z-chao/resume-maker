import type { Config } from 'stylelint';

export default {
  extends: ['stylelint-config-recommended-vue', 'stylelint-config-standard'],
  rules: {
    'import-notation': null,
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.css'],
      customSyntax: 'postcss',
    },
  ],
} satisfies Config;
