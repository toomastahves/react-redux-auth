'use strict';
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: {
    client: './client/main.jsx'
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Demo app'
    })
  ],
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 1337
  }
}
