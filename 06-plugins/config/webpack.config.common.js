const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "index.js",
  },
  output: {
    path: path.resolve(__dirname, "..", "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    modules: [
      "node_modules", // The default
      "src",
    ],
  },
};
