const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { FileListPlugin } = require("./FileListPlugin");

module.exports = {
  entry: {
    index: "index.js",
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
  },
  plugins: [new HtmlWebpackPlugin(), new FileListPlugin()],
  resolve: {
    modules: [
      "node_modules", // The default
      "src",
    ],
  },
};
