var path = require("path");

module.exports = {
  entry: "./js/main.js",
  output: {
    path: "./js",
    filename: "main-bundled.js"
  },
  resolve: {
    fallback: path.join(__dirname, "js/helpers")
  },
  module: {
    loaders: [
      {test: /\.hbs$/, loader: "handlebars-loader"}
    ]
  }
};