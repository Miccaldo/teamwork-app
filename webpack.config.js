const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    module: {
        // exclude node_modules
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        port: 3000,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};