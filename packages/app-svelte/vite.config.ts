import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	resolve: {
		alias: {
			'@': '/src'
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@import "@innbell/style";'
			}
		}
	},
	server: {
		port: 8083,
		cors: true,
		origin: 'http://localhost:3000',
		fs: {
			allow: ['../']
		}
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
