import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  mode:"production",
  plugins: [react()],
  build: {
    target: 'es2015',
    emptyOutDir: true,
    minify: true,
    sourcemap: false,
    rollupOptions:{
      output:{
        entryFileNames:"index.js"
      }
    }
  },
})
