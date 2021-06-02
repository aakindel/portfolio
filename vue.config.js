// vue config created to globally load sass styles

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_global.scss";`,
      },
    },
  },
};