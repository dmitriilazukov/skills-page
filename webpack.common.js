const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        bundle: ['@babel/polyfill', path.resolve('./public/js/src/index.jsx')],
    },
    output: {
        path: path.resolve("./public/dist/"),
        filename: "[name].js"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};