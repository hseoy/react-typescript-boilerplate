'use strict';

const path = require('path');

const imageInlineSizeLimit = process.env.IMAGE_INLINE_SIZE_LIMIT
  ? parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT)
  : 1024 * 10;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
  },
  modules: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.(bmp|gif|jpe?g|png|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: imageInlineSizeLimit,
        },
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
};