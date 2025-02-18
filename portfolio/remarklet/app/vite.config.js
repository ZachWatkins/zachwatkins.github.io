import { defineConfig } from 'vite';
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.js'),
      name: 'Remarklet',
      formats: ['iife'],
    },
  },
});
