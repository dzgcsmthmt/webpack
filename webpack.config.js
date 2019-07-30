const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: '[name].bundle.js',
        // publicPath: 'https://cdn.example.com/'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    // loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     "presets": [
                    //         "env",
                    //         "react"
                    //     ]
                    // }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            fallback: 'file-loader'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: "[name].css",
        //     chunkFilename: "[id].css"
        // }),
        new CleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
        new InterpolateHtmlPlugin({
            'PUBLIC_URL': 'dist'
        }),
        new CopyPlugin([
         {
           from: 'src/jquery.min.js',
           to: './[name].[hash].[ext]',
           transform(content, path) {
               console.log('content',content + '---------------\r\n');
               console.log('path',path + '---------------\r\n');
              if (/\.[^\.]+$/.exec(path) == '.html') {
                var allstr = content.toString().replace(/{vision}/g, Date.now())
                return allstr
              } else {
                return content
              }
          },
         },
       ]),
    ],
    resolve: {
       extensions: ['.js','.jsx','.mjs']
    },
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '-',
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: true,
                    chunks: 'all'
                }
            }
        },
        // minimizer: [
        //     new OptimizeCSSAssetsPlugin({})
        // ]
    }
}
