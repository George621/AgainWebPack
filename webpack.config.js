const path = require('path')
module.exports = {
  // entry: './src/index.js', // 单入口
  entry: {  // 多入口打包
    index:'./src/index.js',
    search:'./src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  mode: 'production'
}