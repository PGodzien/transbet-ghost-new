"use strict";

const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

let webpackConfig = {
    // go down a step to reach assets
    context: path.resolve(__dirname, "./"),

    entry: {
        main: ["./js/app.js", "./css/styles.css"],
    },

    output: {
        path: path.resolve(__dirname, "./assets/built"),
        // filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: /scripts/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "./fonts/",
                        },
                    },
                ],
            },
        ],
    },

    plugins: [
        new MiniCSSExtractPlugin({
            filename: "[name].css",
        }),
        new BrowserSyncPlugin(
            {
                host: "localhost",
                port: 3000,
                proxy: "http://localhost:2368",
                files: [
                    {
                        match: ["**/*.hbs", "./src/*.*"],
                    },
                ],
            },
            {
                reload: true,
            }
        ),
    ],

    devtool: "source-map",
};

module.exports = webpackConfig;
