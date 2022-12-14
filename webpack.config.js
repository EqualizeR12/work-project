const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./js/entryWebPack/main.js"),
    burger_menu: path.resolve(__dirname, "./js/entryWebPack/burgerMenu.js"),
    auth_data: path.resolve(__dirname, "./js/entryWebPack/authData.js"),
    footer_input: path.resolve(
      __dirname,
      "./js/entryWebPack/getFooterInput.js"
    ),
    login_form: path.resolve(__dirname, "./js/entryWebPack/loginForm.js"),
    sign_up_form: path.resolve(__dirname, "./js/entryWebPack/signUpForm.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, "./"),
    open: true,
    compress: true,
    port: 8080,
  },

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /.(s*)css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      //for unpack css styles in bundle
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),

    new TerserPlugin(), //for minification js code

    new OptimizeCssAssetsPlugin(), //for minification css

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      excludeChunks: [
        "login_form",
        "sign_up_form",
      ],
    }),
  ],
};