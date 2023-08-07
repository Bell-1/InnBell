// module
// 使用gulp结合esbuild打包
import { globSync } from 'glob'
import gulp from 'gulp'
import clean from 'gulp-clean'
import esbuild from 'esbuild'
import { execSync } from 'child_process'

function cleanOutDir() {
	return gulp
		.src('lib', { read: false, allowEmpty: true })
		.pipe(clean('lib'))
}

function cleanTypes() {
	return gulp
		.src('types', { read: false, allowEmpty: true })
		.pipe(clean('types'))
}

function genTsc () {
	return execSync('npx tsc')
}

function build(){
	return esbuild.build({
		entryPoints: globSync('src/index.ts'),
		outdir: 'lib',
		format: 'esm',
		bundle: true,
		minify: false,
		sourcemap: true,
		alias: {
			'@': './src'
		}
	})
}

gulp.series(cleanOutDir, cleanTypes, gulp.parallel(build, genTsc))()