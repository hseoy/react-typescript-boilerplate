'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../build'),
  },
  modules: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
};