const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const CSSModuleLoader = {
    loader: "css-loader",
    options: {
        modules: true,
        importLoaders: 1,
        sourceMap: false,
    },
};

const CSSGlobalLoader = {
    loader: "css-loader",
    options: {
        modules: "global",
        importLoaders: 1,
        sourceMap: false,
    },
};

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                exclude: /\.module\.scss$/,
                use: [
                    "style-loader", // 3. Extracting CSS from commonjs
                    CSSGlobalLoader, // 2. Turn css into commonjs
                    "sass-loader", // 1. Turn sass into css
                ],
            },
            {
                test: /\.module\.scss$/i,
                use: [
                    "style-loader", // 3. Extracting CSS from commonjs
                    CSSModuleLoader, // 2. Turn css into commonjs
                    "sass-loader", // 1. Turn sass into css
                ],
            },
        ],
    },
});
