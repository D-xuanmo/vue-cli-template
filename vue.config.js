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
      '/api': {
        target: 'https://www.baidu.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
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
