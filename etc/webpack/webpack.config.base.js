const UglifyPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const OptimizeAssetPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');
const utils = require('./library/util.lib');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.es6'],
        alias: {
            '@/store': utils.resolve('./src/store'),
            '@/reducers': utils.resolve('./src/store/reducers'),
            '@/action': utils.resolve('./src/store/action'),
            '@/atoms': utils.resolve('./src/shared/components/atoms'),
            '@/molecules': utils.resolve('./src/shared/components/molecules'),
            '@/organism': utils.resolve('./src/shared/components/organism'),
            '@/templates': utils.resolve('./src/shared/components/templates'),
            '@/interfaces': utils.resolve('./src/shared/interfaces'),
            '@/utils': utils.resolve('./src/shared/utils'),
            '@/abstract': utils.resolve('./src/shared/abstract'),
            '@/constant': utils.resolve('./src/shared/constant'),
            '@/scss': utils.resolve('./src/shared/styles/scss'),
            '@/styled-component': utils.resolve('./src/shared/styles/styled-component'),
            '@/router': utils.resolve('./src/router'),
            '@': utils.resolve('./src')
        }
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'eslint-loader',
                enforce: 'pre'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['css-loader']
            },
            {
                test: /\.styl(us)?$/,
                exclude: /node_modules/,
                use: ['css-loader', 'stylus-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('img/[name].[hash:7].[ext]')
                    }
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('media/[name].[hash:7].[ext]')
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                    }
                }
            }
        ]
    },
    optimization: {
        moduleIds: 'hashed',
        splitChunks: {
            chunks: 'async',
            minChunks: 1,
            maxAsyncRequests: 10,
            cacheGroups: {
                vendorJS: {
                    test: /[\\/]node_modules[\\/](?!vuetify).*[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 20
                },
                vendor: {
                    test: /\.(css|less|stylus|styl)$/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 10
                }
            }
        },
        usedExports: true,
        minimizer: [
            new UglifyPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    mangle: {
                        keep_fnames: false
                    }
                }
            })
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            hash: true
        }),
        new OptimizeAssetPlugin(),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include: 'allAssets',
            fileWhitelist: [/\.css/],
            fileBlacklist: [/\.js/]
        }),
        new StyleLintPlugin()
    ]
};
