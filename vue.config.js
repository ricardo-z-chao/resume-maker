export default {
  publicPath: process.env.VUE_APP_BASE_PATH,
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
};
