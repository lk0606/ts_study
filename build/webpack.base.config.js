const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': './src/index.ts'
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
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    stats: 'minimal', // 有错或新编译
    // stats: {
    //     // 添加资源信息
    //     assets: false,
    //     // 添加缓存（但未构建）模块的信息
    //     cached: false,
    //     // 显示缓存的资源（将其设置为 `false` 则仅显示输出的文件）
    //     cachedAssets: false,
    //     // 添加构建模块信息
    //     modules: true,
    //     colors: true,
    //     children: false,
    // }
}
