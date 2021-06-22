// vue config created to globally load sass styles

module.exports = {
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Ayo Akindele';
        return args;
      });
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/_global.scss";`,
      },
    },
  },
};