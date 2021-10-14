'use strict';

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader',],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, '../build'),
    port: 8080,
    historyApiFallback: true,
  },
};
