const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const execSync = require("child_process").execSync;

const dll = path.resolve(__dirname, "..", "build");
const manifest = path.resolve(dll, "manifest.json");

if (!(fs.existsSync(dll) && fs.existsSync(manifest))) {
  console.log("Hey, we're missing the DLL.  Building it with npm run dll...");
  execSync("npm run dll");
}

module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, "..", "build"),
      manifest,
      sourceType: "var",
    }),
  ],
  devServer: {
    static: [path.join(__dirname, "..", "build")],
  },
};
