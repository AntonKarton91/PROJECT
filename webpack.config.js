const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtracktPlugin = require('mini-css-extract-plugin')


module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/index.js',
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'CRM/main/static/main/js')
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/,
                use: [
                    {
                        loader: MiniCssExtracktPlugin.loader,
                        options: {
                            publicPath: "../images/",
                        },
                    },
                    // 'style-loader',
                    'css-loader',
                    'sass-loader',
                    ]
            },
            {
                test: /\.(png|jpg|svg|gif|ico)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options: {
                            name: `[name].[ext]`,
                            outputPath: '../../images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            hash: false,
            filename: "../../../templates/main/index.html",
            template: "./index.html"
        }),
        new MiniCssExtracktPlugin({
            filename: '../css/index.css',

        }),

    ]
}

