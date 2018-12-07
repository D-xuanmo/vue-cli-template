module.exports = {
  lintOnSave: true,

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

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
