const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pages = ['index'];

const config = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].js',
    assetModuleFilename: 'img/[name][ext]'
  },

  devServer: {
    devMiddleware: {
      index: 'index.html',
    },
    open: true,
    host: 'localhost',
    port: 9000,
  },

  plugins: [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `src/${page}.html`,
          filename: `${page}.html`,
        })
  ),
  new MiniCssExtractPlugin()
  ),
  
  stats: {
    errorDetails: true,
    children: true
 },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,'css-loader'],
      },
            
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|mp3)$/i,
        type: 'asset/resource',
        generator: {
        filename: 'img/[name][ext]'
        }
      },

      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ],
  },
};

module.exports = config;
