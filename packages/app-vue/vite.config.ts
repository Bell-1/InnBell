import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': '/src',
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@innbell/style";',
			},
		},
	},
	server: {
		port: 8081,
		cors: true,
		origin: 'http://localhost:3000',
		fs: {
			allow: ['../'],
		},
	},
	plugins: [
		vue(),
	],
	optimizeDeps: {
		include: ['inn-*'], // Include your custom tag here
	},
})