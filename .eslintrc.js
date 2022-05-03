module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base', 'plugin:yml/standard',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ],
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  },
};
