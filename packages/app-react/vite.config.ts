import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

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
    port: 8082,
    host: true,
    proxy,
    fs: {
      strict: false,
      allow: ['..']
    },
  },
  plugins: [react()],
})
