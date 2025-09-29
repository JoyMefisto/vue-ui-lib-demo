import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true, // use describe/it/expect without import
    environment: 'jsdom', // DOM emulation for Vue components
    setupFiles: './vitest.setup.ts', // u can include plugins
    css: true, // to make the styles fit (theme.css, base.css and etc.)
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
