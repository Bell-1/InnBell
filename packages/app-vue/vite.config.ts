import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3000/',
  resolve: {
    alias: {
      '@src': '/src',
    },
  },
  server: {
    port: 3000,
    cors: true,
    origin: 'http://localhost:3000',
    fs: {
      allow: ['../'],
    },
  },
  plugins: [vue()],
})