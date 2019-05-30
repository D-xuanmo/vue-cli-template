const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  lintOnSave: true,
  baseUrl: process.env.VUE_APP_BASE_URL,
  outputDir: process.env.VUE_APP_OUTPUTDIR,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: 'https://www.baidu.com',
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
      },
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
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
  },
  configureWebpack: config => {
    return {
      plugins: [
        new CopyWebpackPlugin([
          {
            from: path.resolve(__dirname, './static'),
            to: 'static',
            ignore: ['.*']
          }
        ])
      ]
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
