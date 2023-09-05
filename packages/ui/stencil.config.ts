import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { vueOutputTarget } from '@stencil/vue-output-target'
import { reactOutputTarget } from '@stencil/react-output-target'

console.log('sass', sass)

export const config: Config = {
	namespace: 'inn',
	transformAliasedImportPaths: false,
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader',
		},
		{
			type: 'dist-custom-elements',
		},
		{
			type: 'docs-readme',
		},
		{
			type: 'www',
			serviceWorker: null, // disable service workers
		},
		vueOutputTarget({
			componentCorePackage: '@innbell/ui',
			proxiesFile: '../app-main/src/components/innbell-ui/index.ts',
		}),
		vueOutputTarget({
			componentCorePackage: '@innbell/ui',
			proxiesFile: '../app-vue/src/components/innbell-ui/index.ts',
		}),
		reactOutputTarget({
			componentCorePackage: '@innbell/ui',
			proxiesFile: '../app-react/src/components/innbell-ui/index.ts',
		}),
	],
	testing: {
		browserHeadless: 'new',
	},
	plugins:[
		sass({
			injectGlobalPaths: [
				'../common-style/index.scss',
			],
		}),
	]
}
