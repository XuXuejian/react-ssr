const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");

const devMode = process.env.NODE_ENV !== "production";

module.exports = merge(base, {
  entry: path.resolve(__dirname, "../src/entry-client.js"),
  output: {
    filename: devMode ? "client-bundle.js" : "client-bundle.[chunkHash:8].js",
    path: path.resolve(__dirname, "../dist/public"),
    publicPath: "/public",
    chunkFilename: devMode ? "[name].js" : "[name].[chunkHash:8].js",
  },
  mode: process.env.NODE_ENV,
  devServer: {
    open: true,
    port: 3000,
    hot: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "all",
          filename: "vendor.chunk.js",
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      filename: "index.html",
      favicon: path.resolve(__dirname, "../favicon.ico"),
      template: path.resolve(__dirname, "../index.html"),
    }),
  ],
});
