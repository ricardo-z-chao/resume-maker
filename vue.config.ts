import { defineConfig } from '@vue/cli-service';
import { base } from '@/const';

export default defineConfig({
  publicPath: base,
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
