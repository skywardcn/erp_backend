import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
import { resolve } from 'path'
import inspect from 'vite-plugin-inspect'

export default defineConfig({
  mode: "production",
  plugins: [
    react(),
    inspect()
  ],
  resolve: {
    alias: [{
      find: '@', replacement: resolve(__dirname, "src")
    }]
  },
  build: {
    target: 'es2015',
    emptyOutDir: true,
    minify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: "index.js"
      }
    }
  },
})
