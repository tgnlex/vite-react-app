import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@@": path.resolve(__dirname, "./src/app"),
      "@$": path.resolve(__dirname, "./src/api"),
      "$": path.resolve(__dirname, "./src/lib"),
      "~": path.resolve(__dirname, "./src/style"),
      "&": path.resolve(__dirname, "./src/component"),
      "#": path.resolve(__dirname, "./src/ui"),
    },
  },
});
