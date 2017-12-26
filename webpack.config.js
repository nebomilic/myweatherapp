var webpack = require("webpack");
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/client/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },

 
    devtool: "#eval-source-map",

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader", "babel-loader?presets[]=latest,presets[]=stage-0,presets[]=react"]
               
            },
            {
                test: /\.css$/,
                loader:['style-loader','css-loader']
            },
             {
                test: /\.woff$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template',
            inject: 'body'
            }),
        new ExtractTextPlugin('style.css')
    ]
}

