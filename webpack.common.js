const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
    // sw: path.resolve(__dirname, 'src/scripts/sw.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/, // scss or css
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test:  /\.(png|jpe?g|gif|svg|)$/i,
        loader: 'file-loader',
      },
      // {
      //   test: /\.html$/i,
      //   use: ['html-loader'],
      // }, 
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin()
  ],
};
