'use strict';

module.exports = {
	plugins: ['jest', 'prettier', 'jsx-a11y'],
	env: {
		'jest/globals': true,
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'script',
	},
	extends: [
		'airbnb',
		'plugin:prettier/recommended',
		'prettier/react',
		'plugin:jsx-a11y/recommended',
	],
	rules: {
		'arrow-parens': ['off'],
		'func-names': ['off'],
		'global-require': ['off'],
		indent: ['error', 'tab'],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-tabs': ['off'],
		'prefer-destructuring': ['off'],
		strict: ['error', 'global'],

		'import/prefer-default-export': ['off'],

		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				required: 'id',
			},
		],

		'prettier/prettier': ['error'],

		'react/destructuring-assignment': ['off'],
		'react/jsx-filename-extension': ['off'],
		'react/jsx-props-no-spreading': ['off'],
		'react/prop-types': ['warn'],
		'react/react-in-jsx-scope': ['off'],
		'react/state-in-constructor': ['off'],
	},
};
