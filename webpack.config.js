const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'components', 'Root')
  ],
  output: {
    filename: 'bundle.js',
    publicPath: 'dist',
    path: './dist'
  },
  debug: true,
  devServer: {
    historyApiFallback: true,
    hot: true
  },
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
