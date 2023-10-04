import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:8000,
  },
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import ".//stylesheets/index.scss";`,
  //     },
  //   },
  // },
  // optimizeDeps: {
  //   include: ['@emotion/styled']
  // }
});
