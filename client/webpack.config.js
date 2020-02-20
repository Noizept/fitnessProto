const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")
const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./index.html",
    filename: "./index.html"
})

module.exports = {
    entry: "./src/root.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,

                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devServer: {
        historyApiFallback: {
            index: "/"
        },
        port: 9000
    },
    plugins: [htmlWebpackPlugin]
}
