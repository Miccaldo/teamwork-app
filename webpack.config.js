const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ReactRefreshTypeScript = require("react-refresh-typescript");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

const isDevelopment = process.env.REACT_APP_NODE_ENV !== "production";

module.exports = {
    mode: isDevelopment ? "development" : "production",
    entry: "./src/index.tsx",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [{
                        loader: "ts-loader",
                        options: {
                            getCustomTransformers: () => ({
                                before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean)
                            })
                        }
                    }]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(
                                    __dirname,
                                    "src/tailwind/postcss.config.js"
                                )
                            }
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        static: { directory: path.join(__dirname, "build") },
        hot: true,
        port: 3000
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
