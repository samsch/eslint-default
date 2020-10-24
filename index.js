'use strict';

module.exports = {
  plugins: ['jest', 'prettier', "jsx-a11y"],
  env: {
    'jest/globals': true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: '2020',
      jsx: true,
    },
    sourceType: 'script',
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react', "plugin:jsx-a11y/recommended"],
  rules: {
    'react/destructuring-assignment': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'react/state-in-constructor': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 2,
    'func-names': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    strict: ['error', 'global'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: 'id',
      },
    ],
  },
  parser: 'babel-eslint',
};
