module.exports = ({ _, options, env }) => (
  {
    plugins: {
      autoprefixer: env === 'production' ? options.autoprefixer : false,
      'postcss-cssnext': require('postcss-cssnext')(),
      stylelint: require('stylelint')(),
    },
  }
);

