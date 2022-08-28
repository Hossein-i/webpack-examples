const path = require("path");

module.exports = {
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "..", "build"),
  },
  resolve: {
    modules: [
      "node_modules", // The default
      "src",
    ],
  },
};
