import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@/assets': path.resolve(__dirname, 'src/assets'),
      '@/component': path.resolve(__dirname, 'src/component'),
      '@/page': path.resolve(__dirname, 'src/page'),
      '@/route': path.resolve(__dirname, 'src/route'),
      '@/store': path.resolve(__dirname, 'src/store'),
      '@/type': path.resolve(__dirname, 'src/type'),
    },
  },
});
