const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const fun = require('funcy');

const $ = fun.parameter;
const DEV = process.env.NODE_ENV === 'development';
const TEST = process.env.NODE_ENV === 'test';

const green = '\u001b[32m';
const reset = '\u001b[0m';

/* eslint no-console: 0 */
console.log(`
[DEV]  ==> ${green}${DEV}${reset}
[TEST] ==> ${green}${TEST}${reset}
`);

// Entry /* {{{
const entry = () => (
  DEV ? [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-dev-server/client?http://localhost:3000',
    './src/main.jsx',
  ] : [
    'babel-polyfill',
    './src/main.jsx',
  ]
);
// */ }}}

// Loaders /* {{{
const jsxLoader = () => {
  const config = {
    test: /\.jsx?$/,
    exclude: /node_modules|bower_components/,
    use: {
      loader: 'babel-loader',
    },
  };
  if (process.env.NODE_ENV === 'test') {
    return Object.assign({}, config.use, {
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['transform-flow-strip-types', 'add-module-exports'],
      },
    });
  }
  return config;
};

const imageLoader = () => ({
  test: /\.jpg$|\.png$|\.gif$/,
  use: ['file-loader?name=dist/[path][name].[ext]'],
});

const styleLoader = () => ({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
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
  switch (process.env.NODE_ENV) {
    case 'development':
      plugins
        .push(new webpack.HotModuleReplacementPlugin())
        .push(new webpack.NamedModulesPlugin())
        .push(new webpack.NoEmitOnErrorsPlugin());
      break;
    case 'production':
      plugins
        .push(new webpack.DefinePlugin(defineOpt))
        .push(new webpack.LoaderOptionsPlugin({ minimize: true }))
        .push(new webpack.optimize.UglifyJsPlugin(uglifyOpt));
      break;
    default:
  }
  console.log('');
  return plugins;
};
// */ }}}

// Output /* {{{
const output = {
  path: `${__dirname}/docs/`,
  filename: 'bundle.js',
  libraryTarget: 'umd',
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

module.exports = () => {
  if (process.env.NODE_ENV === 'test') {
    return {
      devtool: 'inline-source-map',
      resolve: { extensions: ['.js', '.jsx'] },
      plugins: getPlugins()
        .push(new webpack.IgnorePlugin(/react\/addons/))
        .push(new webpack.IgnorePlugin(/react\/lib\/ReactContext/))
        .push(new webpack.IgnorePlugin(/react\/lib\/ExecutionEnvironment/)),
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
        'text-encoding': 'window',
      },
      module: {
        loaders: getUsingLoader(),
      },
    };
  }
  return {
    entry: {
      app: entry(),
    },
    output,
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: { loaders: getUsingLoader() },
    performance: { hints: false },
    devServer,
    plugins: getPlugins(),
    devtool: DEV ? 'inline-source-map' : '',
  };
};
