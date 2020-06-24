var WebpackNotifierPlugin = require('webpack-notifier');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    global: './src/js/main.js',
    styles: './src/scss/main.scss'
  },
  output: {
    filename: 'js/[name].js',
    path: __dirname + '/../src/assets/'
  },
  plugins: [new WebpackNotifierPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'css/[name].css'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader?-url'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
