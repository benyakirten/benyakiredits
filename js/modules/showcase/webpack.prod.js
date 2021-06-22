const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizeWebpackPlugin = require("css-minimizer-webpack-plugin");

const CSSModuleLoader = {
    loader: "css-loader",
    options: {
        modules: true,
        importLoaders: 1,
        sourceMap: false,
    },
};

const CSSLoader = {
    loader: "css-loader",
    options: {
        modules: "global",
        importLoaders: 1,
        sourceMap: false,
    },
};

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new CssMinimizeWebpackPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                exclude: /\.module\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extracting CSS from commonjs
                    CSSLoader, // 2. Turn css into commonjs
                    "sass-loader", // 1. Turn sass into css
                ],
            },
            {
                test: /\.module\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extracting CSS from commonjs
                    CSSModuleLoader, // 2. Turn css into commonjs
                    "sass-loader", // 1. Turn sass into css
                ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
});
