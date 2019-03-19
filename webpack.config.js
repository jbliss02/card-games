var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const outputFileName = '[name].bundle.js';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./build'),
        filename: outputFileName,
    },
    mode: 'development',
    devtool: 'source-map',
    target: 'web',
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            // { from: 'src/game.js', to: 'game.js'},
            { from: 'src/index.js', to: 'index.js'},
        ]),
    ]
};