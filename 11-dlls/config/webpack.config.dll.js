const path = require("path");
const webpack = require("webpack");

const dependencies = require("../package.json").dependencies;

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    index: Object.keys(dependencies || {}),
  },
  output: {
    library: "index",
    libraryTarget: "var",
    filename: "[name].vendor.bundle.js",
    path: path.resolve(__dirname, "..", "build"),
  },
  plugins: [
    new webpack.DllPlugin({
      name: "index",
      path: path.join(__dirname, "..", "build", "manifest.json"),
    }),
  ],
};
