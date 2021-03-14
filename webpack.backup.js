/* eslint-disable */
const path = require('path');
const webpack = require('webpack'); // not needed anymore

const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // ok
const HtmlWebpackPlugin = require('html-webpack-plugin'); // ok
const CompressionPlugin = require('compression-webpack-plugin'); // ok
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // not needed anymore
const TerserPlugin = require('terser-webpack-plugin'); // not needed anymore
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // changed to css minimizer

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  // mode: passed as a CLI argument ( --mode development || --mode production )
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:6]',
              },
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers')
              }
            },
          },
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash:base64:8].[ext]',
            outputPath: 'images',
          },
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  devtool: isDevelopment ? 'source-map' : false,
  optimization: {
    minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: 'React Boilerplate',
      favicon: __dirname + '/src/assets/favicon.png'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CompressionPlugin(),
    new CleanWebpackPlugin()
  ]
};