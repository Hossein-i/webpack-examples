const path = require("path");

module.exports = {
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "..", "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            // options: {
            //   name: "[name].[ext]",
            // },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules", // The default
      "src",
    ],
  },
};
