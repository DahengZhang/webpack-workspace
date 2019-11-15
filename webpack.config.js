const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Uglify = require('uglify-es')
const CleanCSS = require('clean-css')

module.exports = {
    entry: {
        app: ['./src/index.js']
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    externals: {
        'vue': 'Vue',
        'axios': 'axios'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.(c|sa|sc)ss$/,
            exclude: /node_modules/,
            use: [
                'vue-style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 7000,
        hot: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: 'index.html',
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
