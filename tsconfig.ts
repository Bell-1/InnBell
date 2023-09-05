export default {
	compilerOptions: {
		'target': 'es5',
		'module': 'commonjs',
		'outDir': 'dist',
		'strict': true,
		'path': {
			'@innbell/utils': ['./packages/utils'],
			'@innbell/types': ['./packages/types'],
			'@innbell/api': ['./packages/api'],
		}
	},
	include: [
		'src/**/*.ts'
	],
	exclude: [
		'node_modules'
	]
}