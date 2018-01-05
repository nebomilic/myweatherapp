const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        port: 3000
    },

 
    devtool: '#eval-source-map',

    module: {
        loaders: [            
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'babel-loader?presets[]=latest,presets[]=stage-0,presets[]=react']
               
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.template',
            inject: 'body'
        }),
        extractPlugin,
        new CopyWebpackPlugin([
            { from: './src/client/ui/styles/assets', to: 'assets' }
        ])     
    ]
};

