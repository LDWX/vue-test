module.exports = {
  chainWebpack: config => {
    config.module
      .rule('csv')
      .test(/\.(csv|tsv)$/)
      .use('csv-loader')
        .loader('csv-loader')
        .end()
  }
}