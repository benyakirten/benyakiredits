const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: resolve(__dirname, "src/index.tsx"),
    },
    output: {
        path: resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            // C - Component, S - Store, G - General, @ - Base
            "@Comp": resolve(__dirname, "src/components"),
            "@Inp": resolve(__dirname, "src/components/Input"),
            "@Disp": resolve(__dirname, "src/components/Display"),
            "@Gen": resolve(__dirname, "src/components/General"),
            "@Layout": resolve(__dirname, "src/components/Layout"),
            "@Type": resolve(__dirname, "src/components/Typography"),
            "@UI": resolve(__dirname, "src/components/UI"),
            "@Store": resolve(__dirname, "src/store"),
            "@Options": resolve(__dirname, "src/store/Options"),
            "@Util": resolve(__dirname, "src/utils"),
            "@Data": resolve(__dirname, "src/data"),
            "@": resolve(__dirname, "src/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx$/i,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/i,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
};
