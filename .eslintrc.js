module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': ['error', { code: 120 }],
    'no-underscore-dangle': ['error', { allow: ['__TYPE__'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.*', './*.js'] }],
    'import/extensions': [
      1,
      {
        '.js': 'never',
        '.jsx': 'never',
        '.ts': 'never',
        '.tsx': 'never',
        '.d.ts': 'never',
      },
    ],
    'no-use-before-define': 0,
    '@typescript-eslint/no-use-before-define': 1,
    'no-undef': 0,
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
