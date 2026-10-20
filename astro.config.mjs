import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://balloonslane.com/',
  output: 'static',
  build: {
    format: 'file'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
