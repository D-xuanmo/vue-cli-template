module.exports = {
  lintOnSave: true,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/variables.scss";`
      }
    }
  },
  productionSourceMap: false
}
