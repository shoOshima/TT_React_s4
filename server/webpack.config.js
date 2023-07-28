// const path = require('path')

// module.exports = {
//     entry: path.resolve(__dirname, "index.js"),  //エントリポイントであるファイルのパスを指定
//     output: {
//         path: path.resolve(__dirname, 'dist'),  //バンドルしたファイルの出力先のパスを指定
//         filename: 'bundle.js' //出力時のファイル名の指定
//     }
// }


const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const express = require('express')

module.exports = {
  entry: {
    server: './index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  target: 'node', //SSRの時はnode?
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
  externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [{loader: "html-loader"}]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    })
  ]
}
