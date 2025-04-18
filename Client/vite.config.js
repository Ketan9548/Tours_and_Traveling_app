import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // '/api':'https://backend-of-tours.onrender.com',
      '/api': 'http://localhost:3000',
    }
  },
  plugins: [react()],
})
