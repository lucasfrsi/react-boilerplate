const path = require('path');
const webpack = require('webpack');

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
      services: path.join(__dirname, 'src', 'services'),
      store: path.join(__dirname, 'src', 'store'),
      style: path.join(__dirname, 'src', 'style'),
      utils: path.join(__dirname, 'src', 'utils'),
    },
    extensions: ['.js', '.jsx'],
    symlinks: false,
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
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Boilerplate v1.0.0',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
      },
      favicon: path.join(__dirname, 'src', 'assets', 'favicon.png'),
    }),
    new CompressionPlugin(),
    new webpack.DefinePlugin({ __webpack_devmode__: isDevelopment }),
  ],
};

if (isDevelopment) {
  config.devServer = {
    contentBase: './dist',
    hot: true,
    clientLogLevel: 'silent',
    historyApiFallback: true,
    compress: true,
  };

  config.devtool = 'eval-source-map';

  config.target = 'web';
} else {
  config.target = 'browserslist';
}

module.exports = config;
