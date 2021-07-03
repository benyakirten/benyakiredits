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
            "@Inputs": resolve(__dirname, "src/components/Inputs"),
            "@Disp": resolve(__dirname, "src/components/Display"),
            "@Gen": resolve(__dirname, "src/components/General"),
            "@Layout": resolve(__dirname, "src/components/Layout"),
            "@Type": resolve(__dirname, "src/components/Typography"),
            "@UI": resolve(__dirname, "src/components/UI"),
            "@Hooks": resolve(__dirname, "src/hooks"),
            "@Store": resolve(__dirname, "src/store"),
            "@Options": resolve(__dirname, "src/store/Options/Options.context"),
            "@ClickBoxContext": resolve(
                __dirname,
                "src/store/Showcase/ClickBox/ClickBox.context"
            ),
            "@ConcentricCirclesContext": resolve(
                __dirname,
                "src/store/Showcase/ConcentricCircles/ConcentricCircles.context"
            ),
            "@ColorBoxesContext": resolve(
                __dirname,
                "src/store/Showcase/ColorBoxes/ColorBoxes.context"
            ),
            "@FilterGeneratorContext": resolve(
                __dirname,
                "src/store/Showcase/FilterGenerator/FilterGenerator.context"
            ),
            "@Util": resolve(__dirname, "src/utils"),
            "@Data": resolve(__dirname, "src/data"),
            "@Constants": resolve(__dirname, "src/data/constants"),
            "@ShowcaseConstants": resolve(__dirname, "src/data/constants/showcase"),
            "@GlobalScss": resolve(__dirname, "src/styles/globals.scss"),
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
