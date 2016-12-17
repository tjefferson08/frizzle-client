const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.jsx'),
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  }
};
