const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Uglify = require('uglify-es')
const CleanCSS = require('clean-css')

const publicPath = '/'
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    devtool: isDev ? 'eval' : 'source-maps',
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        publicPath
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vuex': 'Vuex'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.(c|sa|sc)ss$/,
            exclude: /node_modules/,
            use: [
                isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpe?g|gif)$/,
            exclude: /node_modules/,
            use: {
            loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: '[name].[hash:6].[ext]',
                    publicPath
                }
            }
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 7000,
        hot: true,
        overlay: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            publicPath,
            chunkFilename: '[name].chunk.css',
            filename: '[name].bundle.css'
        }),
        new HtmlPlugin({
            template: 'ejs-loader!index.html',
            inject: true
        }),
        new CopyPlugin([{
            from: path.resolve(__dirname, 'static'),
            to: 'static',
            ignore: ['*.js', '*.css']
        }, {
            from: path.resolve(__dirname, 'static/**/*.css'),
            to: '',
            transform (content) {
                return new CleanCSS({}).minify(content).styles
            }
        }, {
            from: path.resolve(__dirname, 'static/**/*.js'),
            to: '',
            transform (content) {
                return Uglify.minify(content.toString()).code
            }
        }])
    ]
}
