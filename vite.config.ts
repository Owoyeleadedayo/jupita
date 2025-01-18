import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/authentication": {
        target: "http://18.212.86.239", // The backend URL
        changeOrigin: true, // This ensures the correct CORS headers are passed
        rewrite: (path) => path.replace(/^\/authentication/, ""), // Optional: adjusts path as needed
      },
    },
  },
});
