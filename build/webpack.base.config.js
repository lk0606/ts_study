const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: {
        'app': './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    // loader: 'ts-loader',
                    loader: 'awesome-typescript-loader',
                    options: {
                         /**
                         * 默认值是 false，开启表示只做语言转换，不做类型检查
                         * 开启缺点，不做类型检查 优点：提升打包速度
                         * 针对缺点使用以下插件
                         * npm i fork-ts-checker-webpack-plugin -D
                         * 另一个loader
                         * npm i awesome-typescript-loader -D
                         * 区别：
                         * 1. 更适合与 babel 集成，使用 babel 的转义和缓存
                         * 2. 不需要安装额外的插件，就可把类型检查放在独立进程中进行
                         * ts 与 babel
                         * babel 无类型检查能力 但插件众多 babel7 之前不支持ts，需要各种 loader 转 js babel 再处理 js
                         *
                         */
                        transpileOnly: true
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        // new ForkTsCheckerWebpackPlugin(),
        new CheckerPlugin() , // 类型检查无效
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    // stats: 'minimal', // 有错或新编译
    stats: {
        // 添加资源信息
        assets: false,
        // 添加缓存（但未构建）模块的信息
        cached: false,
        // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
        cachedAssets: false,
        // 添加构建模块信息
        modules: true,
        colors: true,
        children: false,
    }
}
