'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const imageInlineSizeLimit = process.env.IMAGE_INLINE_SIZE_LIMIT
  ? parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT)
  : 1024 * 10;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
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
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
};