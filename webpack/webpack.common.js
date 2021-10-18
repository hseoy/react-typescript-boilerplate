'use strict';

const paths = require('./paths.js');
const getClientEnvironment = require('./env.js');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const imageInlineSizeLimit = process.env.IMAGE_INLINE_SIZE_LIMIT
  ? parseInt(process.env.IMAGE_INLINE_SIZE_LIMIT)
  : 1024 * 10;

const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  entry: paths.appIndex,
  output: {
    path: paths.appBuild,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(bmp|gif|jpe?g|png|webp)$/i,
        loader: 'url-loader',
        options: {
          limit: imageInlineSizeLimit,
          name: 'static/media/[name].[contenthash:8].[ext]',
        },
      },
      {
        test: /\.svg$/i,
        loader: 'svg-url-loader',
        options: {
          limit: imageInlineSizeLimit,
          name: 'static/media/[name].[contenthash:8].svg',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CaseSensitivePathsPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.appHtml,
      filename: 'index.html',
      templateParameters: env.raw,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: paths.appPublic,
          to: '.',
          globOptions: {
            ignore: [paths.appHtml],
          },
        },
      ],
    }),
    new webpack.DefinePlugin(env.stringified),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
};
