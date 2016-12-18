const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'components', 'app')
  ],
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  debug: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader'
    }]
  }
};
