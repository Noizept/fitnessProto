const HtmlWebPackPlugin = require("html-webpack-plugin")

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
    resolve:{
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [htmlWebpackPlugin]
}
