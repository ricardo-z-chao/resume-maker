import { defineConfig } from '@vue/cli-service';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/resume-maker/' : '/',
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: {
            '@tailwindcss/postcss': {},
          },
        },
      },
    },
  },
});
