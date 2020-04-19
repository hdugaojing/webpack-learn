const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HappyPack = require('happypack');
module.exports = {
  // 入口
  entry: {
    app: './src/index.js',
    another: './src/another-module.js'
  },
  // 输出
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '/',
  },
  // loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use: [
          'happypack/loader?id=file'
        ]
      }
    ]
  },
  // plugin
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
    new HappyPack({
      // 这个HappyPack的“名字”就叫做file，和楼上的查询参数遥相呼应
      id: 'file',
      loaders: ['file-loader']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};