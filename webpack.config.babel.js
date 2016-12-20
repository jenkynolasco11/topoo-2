// es6
import webpack from 'webpack'
import path from 'path'
import nodeExternals from 'webpack-node-externals'

// var webpack = require('webpack');
// var path = require('path');

// es6
export default {

// es5
// module.exports = {
  // devtool : 'inline-source-map',
  entry : [
    './products/MainComponent.jsx'
  ],
  output : {
    path : path.join(__dirname,'static'),
    filename : 'bundle.js',
    // libraryTarget : 'commonjs2'
  },
  // target : 'node',
  // externals : [nodeExternals()],
  // resolve : {
  //   modulesDirectories : ['node_modules','.','chat'],
  //   extensions : ['','*.jsx']
  // },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        exclude : /nodule_modules/,
        // include : [
        //   path.join(__dirname,'chat')
        // ],
        loader : 'babel',
        query : {
          presets : ['es2015','react']
        }
      }
    ]
  },
  // plugins : [
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ]
}
