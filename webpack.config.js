const path = require("path");

module.exports = {
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, "./js"),
    filename: "main-bundled.js"
  },
  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: [{
          loader: "handlebars-loader",
          options: {helperDirs: path.resolve(__dirname, "./js/helpers")}
        }]
      }
    ]
  }
};