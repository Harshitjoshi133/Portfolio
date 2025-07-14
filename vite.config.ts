import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@assets': path.resolve(__dirname, './client/public/assets')
    }
  },
  root: path.resolve(__dirname, './client'),
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})