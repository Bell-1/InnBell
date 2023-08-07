module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	rules: {
		// 缩进
		'indent': ['error', 'tab'],
		// 引号
		'quotes': ['error', 'single'],
		// 分号
		'semi': ['error', 'never'],
		// 允许any
		'@typescript-eslint/no-explicit-any': 'off',
	},
}
