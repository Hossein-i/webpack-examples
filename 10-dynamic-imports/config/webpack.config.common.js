const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "index.js",
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    modules: [
      "node_modules", // The default
      "src",
    ],
  },
};
