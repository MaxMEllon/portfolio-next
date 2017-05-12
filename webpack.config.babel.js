const webpack = require('webpack');
const path = require('path');
const { name } = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const DEV = process.env.NODE_ENV !== 'production';

const green = '\u001b[32m';
const reset = '\u001b[0m';

console.log(`[DEV] ==> ${green}${DEV}${reset}`);

const config = {
  entry: {
    app: DEV ? [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://localhost:3000',
      './src/main.jsx',
    ] : [
      'babel-polyfill',
      './src/main.jsx',
    ],
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|bower_components/,
        use: ['babel-loader'],
      },
      {
        test: /\.jpg$|\.png$|\.gif$/,
        use: ['file-loader?name=dist/[path][name].[ext]'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: DEV ? [
    new ExtractTextPlugin('bundle.css'),
    new Dotenv({ path: './.env' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ] : [
    new ExtractTextPlugin('bundle.css'),
    new Dotenv({ path: './.env' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      comments: false,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  devtool: DEV ? 'inline-source-map' : '',
};

module.exports = config;
