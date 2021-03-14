// Modules
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  // Entry: indicates which module webpack should use to begin building out
  // Running path.join method for a normalized resulting path
  entry: path.join(__dirname, 'src', 'index.jsx'),
  // Output: tells webpack where to emit the bundles it creates and how to name these files
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    publicPath: '/',
    clean: true,
    assetModuleFilename: 'images/[contenthash:8].[ext]',
  },
  // Loaders: allow webpack to process other types of files and convert them into valid modules
  // Loaders are evaluated from right to left (bottom to top)
  module: {
    rules: [
      // Best practices:
      // - Use RegExp only in test and for filename matching
      // - Use arrays of absolute paths in include and exclude to match the full path
      // - Try to avoid exclude and prefer include
      {
        // CONDITIONS ===
        // test: /\.jsx?$/
        // include: path.join(__dirname, 'src', 'assets'),
        // exclude: /node_modules/,
        // ACTIONS ===
        // use: [{
        //   loader: '',
        //   options: {
        //     // ...
        //   },
        // }],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // Options for resolving module requests (does not apply to resolving of loaders)
  resolve: {
    alias: {
      assets: path.join(__dirname, 'src', 'assets'),
    },
    extensions: ['.js', '.jsx', '.scss'],
    // Set to false to avoid causing module resolution to fail when using tools
    // that symlink packages
    symlinks: false,
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'eval-source-map',
  optimization: {
    runtimeChunk: 'single',
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
    // minimizer: [
    //   new TerserPlugin({
    //     parallel: true,
    //     sourceMap: true, // Must be set to true if using source-maps in production
    //     terserOptions: {
    //       // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
    //     },
    //   }),
    // ],
  },
  // Plugins: used to perform a wider range of tasks.
  // They serve the purpose of doing anything else that a loader cannot do.
  // Since plugins can take args/options, we must pass a 'new' instance to the plugins property
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Boilerplate v1.0.1',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
        'application-name': 'Application Name',
        description: 'description of the page',
      },
      favicon: path.join(__dirname, 'src', 'assets', 'favicon.png'),
    }),
  ],
};

// Check config against CREATE REACT APP?
// Browserslist

// WHAT IS DEV AND WHAT IS PROD
// Hot Module Replacement (import is not needed anymore)

// "start": "webpack-cli serve --config ./webpack.config.js --progress",
// "build": "npm run lint && cross-env NODE_ENV=production webpack --config webpack.config.js",
// Try removing cross-env and using webpack --node-env instead

// Check in the future: PWA, Progressive Web Application
// Experience similar to native apps, like to function when offline.
// + Service Workers | Workbox

// REMOVE FILE LOADER (using asset modules now)
