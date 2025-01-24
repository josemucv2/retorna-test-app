import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  define: {
    "process.env": process.env,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
})
