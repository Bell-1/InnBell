import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'

const alias = {
	'@': resolve(__dirname, 'src'),
}

const proxy = {
	'/api': {
		target: 'http://localhost:3000',
		changeOrigin: true,
	},
}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias,
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@innbell/style";',
			},
		},
	},
	server: {
		port: 8080,
		host: true,
		proxy,
		fs: {
			allow: [
				searchForWorkspaceRoot(process.cwd()),
				'/mygit/micro-zoe/micro-app/',
			],
		},
	},
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: tag => /^micro-app/.test(tag),
				},
			},
		}),
		vueJsx(),
		svgLoader(),
	],
	optimizeDeps: {
		include: ['inn-*'], // Include your custom tag here
	},
})
