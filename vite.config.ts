import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: `${process.cwd()}/src/frontend`,
  plugins: [
    react(),
  ],
  build: {
    outDir: '../../dist/frontend',
  },
});
