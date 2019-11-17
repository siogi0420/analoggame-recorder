const path = require('path')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  outputDir: 'docs/',
  assetsDir: './',
  publicPath: './',
  pwa:{
  	name: 'AnalogGame-Recorder',
    themeColor: '#EF5350',
  }
}