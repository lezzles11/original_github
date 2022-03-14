const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path")
module.exports = {
    entry: { app: './src' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        // specifies the name of the library that will be used in other module enviornemnts
        library: 'node_basetest',
        // library target allows you to speicfy how the module will be exposed
        libraryTarget: 'umd',
        // to make it available in both browser and node, you have to specify option to this
        globalObject: 'this'
    },
    externals: {
        bcrypt: {
            commonjs: 'bcrypt',
            commonjs2: 'bcrypt',
            amd: 'bcrypt',
            root: 'bcrypt'
        },
        jsonwebtoken: {
            commonjs: 'jsonwebtoken',
            commonjs2: 'jsonwebtoken',
            amd: 'jsonwebtoken',
            root: 'jsonwebtoken'
        },
        whats_wrong: {
            commonjs: 'whats_wrong',
            commonjs2: 'whats_wrong',
            amd: 'whats_wrong',
            root: 'whats_wrong'
        }

    },
    module: {
        rules: [{
            // specify whihc files shoulde be loaded
            test: /\.js?$/,
            // specify which to exclude
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [require('@babel/plugin-proposal-class-properties')],
                },
            }],
        }],
    },
    plugins: [
        // new CopyWebpackPlugin({
        //     patterns: [{ from: "src/index.html" }]
        // })
    ],
};