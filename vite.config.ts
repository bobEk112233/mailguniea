import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'terser',
  },
  server: {
    port: 5173,
    host: true,
    open: true
  },
  preview: {
    port: 5173,
    host: true
  }
});