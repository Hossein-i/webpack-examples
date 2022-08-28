const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
  },
  plugins: [],
  devServer: {
    static: [path.join(__dirname, "..", "build")],
  },
};
