const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LessFunc = require('less-plugin-functions');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const devServer = require('./webpack.server');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SERVER_PATH = 'src/static/js/server.config.js';

let config = {
	entry: {
		index: './src/index.ts',
        vendor: ['vue', 'vue-router', 'vue-class-component']
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
		    {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 versions']
                                })
                            ]
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            plugins: [ new LessFunc() ]
                        }
                    }]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.jpg|\.png|\.jpeg|\.svg|\.ttf|\.woff$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './img',  // 运行在服务器时发布路径
                        publicPath: './img'  // 打包后CSS文件相对路径
                    }
                }]
            }
		]
	},
	resolve: {
        alias: {
            '@static': path.resolve(__dirname, 'src/static'),
            '@views': path.resolve(__dirname, 'src/views'),
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.ts', '.json', '.less', '.css', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '中心控制台',
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            hash: true,
            chunks: ['index', 'vendor', 'runtime'],
            minify: {
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true, //移除空白字符
                minifyJS: true, 
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
        Autoprefixer,
        new ExtractTextPlugin('[name].css'),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, SERVER_PATH),
            toType: 'file'
        }])
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    chunks: 'all',
                    minChunks: 2
                }   
            }
        }
    },
    devServer: devServer,
    externals: {
        _config: 'server'
    }
}

module.exports = config;