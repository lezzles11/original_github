const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require("path")
module.exports = {
    entry: { app: './src' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        // specifies the name of the library that will be used in other module enviornemnts
        library: 'array_helperz',
        // library target allows you to speicfy how the module will be exposed
        libraryTarget: 'umd',
        // to make it available in both browser and node, you have to specify option to this
        globalObject: 'this'
    },
    externals: {
        when_you_free: {
            commonjs: 'when_you_free',
            commonjs2: 'when_you_free',
            amd: 'when_you_free',
            root: 'when_you_free',
        },
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: 'lodash',
        },
        matchSorter: {
            commonjs: 'match-sorter',
            commonjs2: 'match-sorter',
            amd: 'match-sorter',
            root: 'match-sorter',
        },
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