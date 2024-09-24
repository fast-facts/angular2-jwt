const tseslint = require('typescript-eslint');
const config = require('eslint-config-final');

module.exports = tseslint.config(
  {
    ignores: [
      '**/node_modules/',
      '**/e2e/',
      'src/environments/',
      'eslint.config.js'
    ],
  },
  {
    files: ['**/*.ts'],

    extends: [
      ...config.typescript,
      ...config.angularTypescript,
    ],

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: [
          'src/tsconfig.app.json',
          'src/tsconfig.spec.json',
          'projects/angular-jwt/tsconfig.lib.json',
          'projects/angular-jwt/tsconfig.lib.prod.json',
          'projects/angular-jwt/tsconfig.spec.json',
        ],
      },
    },
  },
  {
    files: ['**/*.html'],

    extends: [
      ...config.angularTemplate,
    ]
  }
);