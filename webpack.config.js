/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
  mode: isDevelopment ? 'development' : 'production',

  entry: path.join(__dirname, 'src', 'index.jsx'),

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: 'chunks/[contenthash].js',
    assetModuleFilename: 'images/[contenthash:8][ext]',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: {
                localIdentName: '[local]_[hash:base64:6]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-flexbugs-fixes',
                  [
                    'postcss-preset-env',
                    {
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    },
                  ],
                ],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    alias: {
      assets: path.join(__dirname, 'src', 'assets'),
      components: path.join(__dirname, 'src', 'components'),
      lib: path.join(__dirname, 'src', 'lib'),
      pages: path.join(__dirname, 'src', 'pages'),
      sass: path.join(__dirname, 'src', 'sass'),
      services: path.join(__dirname, 'src', 'services'),
      store: path.join(__dirname, 'src', 'store'),
    },
    extensions: ['.js', '.jsx', '.scss'],
    symlinks: false,
    // Avoid causing module resolution to fail when using tools that symlink packages
  },

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
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },

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
    new CompressionPlugin(),
    new webpack.DefinePlugin({ __webpack_devmode__: isDevelopment }),
  ],
};

if (isDevelopment) {
  // This is a workaround, check notes[2]
  config.target = 'web';

  config.devServer = {
    contentBase: './dist',
    hot: true,
    clientLogLevel: 'silent',
    historyApiFallback: true,
    compress: true,
  };

  config.devtool = 'eval-source-map';
} else {
  config.target = 'browserslist';

  config.plugins.push(new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css',
  }));
}

module.exports = config;

// NOTES ==
// 1. Watch for React Fast Refresh definite release
// 2. About the target config:
// Browserslist is the default, however it breaks page refresh on changes
// Fix: watch for webpack-dev-server next release with a fix (4+)
// 3.
