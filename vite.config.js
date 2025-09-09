import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/warhammer-team-site/',
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  },
  define: {
    global: 'globalThis',
  },
  build: {
    rollupOptions: {
      external: [],
    }
  }
})
