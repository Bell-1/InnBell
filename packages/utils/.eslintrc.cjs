// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	root: true,
	env: {
		browser: true,
		node: true,
		commonjs: true,
		es6: true,
		amd: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
	},
	ignorePatterns: ['build/'],
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	rules: {
		// eslint rules http://eslint.cn/docs/rules/
		// vue rules https://eslint.vuejs.org/rules/
		'indent': [2, 'tab', { SwitchCase: 1 }], // 缩进使用tab，可以根据自己使用习惯设置tab长度
		'quotes': [2, 'single', { allowTemplateLiterals: true }],
		// 多行结尾逗号
		'comma-dangle': [2, 'always-multiline'],
		// 不允许使用console
		'no-console': 1,
		// 不允许使用debugger
		'no-debugger': 1,
		// 不允许使用alert
		'no-alert': 1,
		// 数组元素换行保持一致性
		'array-element-newline': ['error', 'consistent'],
		// 属性换行保持一致性
		'object-curly-newline': [
			'error',
			{
				multiline: true,
				consistent: true,
			},
		],
		// 花括号前后空格
		'object-curly-spacing': [2, 'always'],
		// key-value之间空格
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict',
			},
		],
		'no-multiple-empty-lines': ['error', { max: 1 }],
	},
})
