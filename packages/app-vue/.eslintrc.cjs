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
	plugins: ['@typescript-eslint', 'vue', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
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
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1, // 属性缩进
				baseIndent: 1, // 基础缩进
				closeBracket: 0, // 关闭标签缩进
				alignAttributesVertically: true, // 垂直对齐属性
				ignores: [],
			},
		],
		// vue属性换行
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: { max: 3 }, // 表示单行最多允许 3 个属性
				multiline: { max: 1 }, // 表示多行时每行最多只允许 1 个属性
			},
		],
		'vue/component-name-in-template-casing': ['error', 'kebab-case'],
		// 不建议使用any 允许any 摆烂专用
		'@typescript-eslint/no-explicit-any': 0,
		// 不建议使用! 非空断言不提示 当明确知道不为空时使用非空断言符号
		'@typescript-eslint/no-non-null-assertion': 0,
	},
})
