module.exports = {
  lintOnSave: true,
  publicPath: process.env.VUE_APP_BASE_URL,
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'https://www.xuanmo.xin',
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/variables.scss";'
      }
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.output.filename('[name].[hash].js').end()
    config.module.rule('svg').uses.delete('file-loader')
    config.module
      .rule('svg')
      .use('svg-sprite')
      .loader('svg-sprite-loader')
      .options({
        extract: false,
        symbolId: 'icon-[name]'
      })
  }
}
