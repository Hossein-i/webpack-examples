const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
  },
  plugins: [new HtmlWebpackPlugin()],
  devServer: {
    static: [path.join(__dirname, "..", "build")],
  },
};
