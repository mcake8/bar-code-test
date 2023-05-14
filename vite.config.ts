import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

console.log(process.env.API_URL)
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: 'localhost',
    port: 3000,
    proxy: {
      '/barcode': {
        target: 'https://products.aspose.app',
        changeOrigin: true,
        secure: false,
        
      }
    }
  }
})
