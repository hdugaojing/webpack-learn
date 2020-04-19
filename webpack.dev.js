const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer:{
        contentBase: './dist',
        // 开启HMR
        hot: true
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})