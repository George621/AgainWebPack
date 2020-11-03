const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const autoprefixer = require('autoprefixer');

module.exports = {
  // entry: './src/index.js', // 单入口
  entry: { 
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          // 'style-loader', // MiniCssExtractPlugin 插件冲突，一个是提出一个文件，另一个是插入head标签中
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: [
                    require('autoprefixer')({
                        overrideBrowserslist: [   //这里autoprefixer 改成了这个
                            "defaults",
                            "not ie < 11",
                            "last 2 versions",
                            "> 1%",
                            "iOS 7",
                            "last 3 iOS versions"
                        ]
                    })
                ]
            }
        },
　　　　　'less-loader',
        ]
      },
      {
        test: /.less$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions:{
                plugins: () => [
                  require('autoprefixer')()
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 10240,   // 小于这个数字则打包成base 64
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 10240,
              name: '[name]_[hash:8][ext]'
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css'
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp:/\.css$/g,
      cssProcessor:require('cssnano')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/search.html'),
      filename:'search.html',
      chunks: 'search',
      inject: true,
      minify: {
        html5: true, 
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
      filename:'index.html',
      chunks: 'index',
      inject: true,
      minify: {
        html5: true, 
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
  ] 
};