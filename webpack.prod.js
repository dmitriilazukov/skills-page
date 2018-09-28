const merge = require('webpack-merge');
const common = require('./webpack.common');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimizeCss = require('optimize-css-assets-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new uglifyJsPlugin(),
            new optimizeCss()
        ]
    }
});