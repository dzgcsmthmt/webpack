const path = require('path');
const webpack = require('webpack');
console.log('process.cwd()',__dirname);
module.exports = {
    context: process.cwd(),
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    entry: {
        library: [
            'react',
            'react-dom'
        ]
    },
    output: {
        filename: '[name].dll.js',
        path: path.resolve(__dirname, './dist'),
        // library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: '[name]',
            path: path.join(__dirname,'./dist','manifest.json'),
        })
    ]
};
