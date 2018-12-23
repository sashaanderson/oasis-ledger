var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../oasis-ledger-server/src/main/resources/assets/'),
    filename: 'bundle.js'
  },
  optimization: { minimize: false }, // disable UglifyJsPlugin
  performance: { hints: false }, // disable warning in asset size limit
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index.js', 'index.jsx']
  }
};
