let HtmlWebPackPlugin = require("html-webpack-plugin");
let path = require('path');
module.exports = {
  // Entry Point
  entry: {
    app: "./src/index.js",
  },

  // Output
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  // How to resolve encountered imports
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./dist/index.html",
      filename: "./index.html"
    })
  ]

}