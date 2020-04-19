const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 入口
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist'
  },
  // 输出
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
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
          'file-loader'
        ]
      }
    ]
  },
  // plugin
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
};