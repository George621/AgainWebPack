# AgainWebPack
## webpack -- 深耕一下
* 入口 单入口 多入口
 entry: './src/index.js',
  entry: {  // 多入口打包
    index: './src/index.js',
    search: './src/search.js'
  }
# 文件指纹
## js使用chuankhash  
## css 使用contenthash
*  'style-loader', // MiniCssExtractPlugin 插件冲突，一个是提出一个文件，另一个是插入head标签中


# 文件指纹 不能和热更新一起使用，应为只有生产环境才能用文件指纹

## js使用 打包基础文件，cdn引入方式
    //  new HtmlWebpackExternalsPlugin({ // cdn引入
    //   externals: [
    //     {
    //       module: 'react',
    //       entry: 'dist/vendors.js',
    //       global: 'React',
    //     },
    //     {
    //       module: 'react-dom',
    //       entry: 'dist/vendors.js',
    //       global: 'ReactDom',
    //     },
    //   ],
    // })

## js使用chuankhash  css 使用contenthash
## js使用chuankhash  css 使用contenthash
## js使用chuankhash  css 使用contenthash