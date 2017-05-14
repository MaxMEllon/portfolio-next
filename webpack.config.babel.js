const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const fun = require('funcy');

const $ = fun.parameter;
const DEV = process.env.NODE_ENV !== 'production';

const green = '\u001b[32m';
const reset = '\u001b[0m';

/* eslint no-console: 0 */
console.log(`
[DEV] ==> ${green}${DEV}${reset}
`);

// Entry /* {{{
const devEntry = [
  'babel-polyfill',
  'react-hot-loader/patch',
  'webpack/hot/only-dev-server',
  'webpack-dev-server/client?http://localhost:3000',
  './src/main.jsx',
];

const prodEntry = [
  'babel-polyfill',
  './src/main.jsx',
];
// */ }}}

// Loaders /* {{{
const jsxLoader = () => (
  fun(
    ['development', () => ({
      test: /\.jsx?$/,
      exclude: /node_modules|bower_components/,
      use: ['babel-loader'],
    })],
    ['production', () => ({
      test: /\.jsx?$/,
      use: ['babel-loader'],
    })],
    [$, () => { throw new TypeError('Unexpected LoadingTypes.'); }],
  )(process.env.NODE_ENV)
);

const imageLoader = () => ({
  test: /\.jpg$|\.png$|\.gif$/,
  use: ['file-loader?name=dist/[path][name].[ext]'],
});

const styleLoader = () => ({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
      'postcss-loader',
    ],
  }),
});

const woffLoader = () => ({
  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'url-loader?limit=10000&mimetype=application/font-woff',
});

const fontLoader = () => ({
  test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
  loader: 'file-loader',
});

const getUsingLoader = () => (
  [
    jsxLoader(),
    imageLoader(),
    styleLoader(),
    woffLoader(),
    fontLoader(),
  ]
);
// */ }}}

// Plugins /* {{{
const uglifyOpt = {
  sourceMap: false,
  comments: false,
};

const defineOpt = {
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  },
};

const getPlugins = () => {
  const plugins = [];
  plugins.push = (arg) => {
    console.log(`[PLUG] ==> ${green}${arg.constructor.name}${reset}`);
    Array.prototype.push.call(plugins, arg);
    return plugins;
  };

  /* eslint no-unused-vars: 0 */
  plugins
    .push(new ExtractTextPlugin('bundle.css'))
    .push(new Dotenv({ path: './.env' }));
  fun(
    ['development', () => (
      plugins
        .push(new webpack.HotModuleReplacementPlugin())
        .push(new webpack.NamedModulesPlugin())
        .push(new webpack.NoEmitOnErrorsPlugin())
    )],
    ['production', () => (
      plugins
        .push(new webpack.DefinePlugin(defineOpt))
        .push(new webpack.LoaderOptionsPlugin({ minimize: true }))
        .push(new webpack.optimize.UglifyJsPlugin(uglifyOpt))
    )],
    [$, () => { throw new TypeError('Unexpected LoadingTypes.'); }],
  )(process.env.NODE_ENV);
  console.log('');
  return plugins;
};
// */ }}}

// Server /* {{{
const devServer = {
  host: 'localhost',
  port: 3000,
  historyApiFallback: true,
  hot: true,
};
// */ }}}

module.exports = () => ({
  entry: {
    app: DEV ? devEntry : prodEntry,
  },
  output: {
    path: `${__dirname}/docs/`,
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: { loaders: getUsingLoader() },
  devServer,
  plugins: getPlugins(),
  devtool: DEV ? 'inline-source-map' : '',
});
