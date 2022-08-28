const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "index.js",
    other: "other.js",
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
  },
  plugins: [new HtmlWebpackPlugin()],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1,
    },
  },
  resolve: {
    modules: [
      "node_modules", // The default
      "src",
    ],
  },
};
