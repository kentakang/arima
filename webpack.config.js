const path = require('path');

module.exports = [
  {
    entry: './src/app.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    target: 'electron24.4-main',
  },
  {
    entry: './src/preload.ts',
    target: 'electron-preload',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'preload.js',
    },
  },
];
