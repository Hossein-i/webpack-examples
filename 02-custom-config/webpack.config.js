const path = require("path");

const nodeEnv =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = {
  mode: nodeEnv,
  entry: "./src/main.js",
  output: {
    filename:
      nodeEnv === "production"
        ? "[name].[hash].bundle.js"
        : "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    modules: [
      "node_modules", // The default
      "src",
    ],
  },
};
