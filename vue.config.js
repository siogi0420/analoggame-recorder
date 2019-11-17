const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: 'docs/',
  assetsDir: './',
  publicPath: './',
  pwa: {
    themeColor: '#EF5350',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  }
}