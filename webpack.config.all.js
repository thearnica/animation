const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const autoprefixer = require('autoprefixer');

const root = path.resolve(__dirname);

const setup = (options = {}) => ({
  entry: {
    example: ['react-hot-loader/patch', './src/example'],
  },
  devtool: 'none',
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, 'release'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: `${options.chunkPrefix}[id].js`,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js$/,
        include: /node_modules\/react-dom/,
        use: {
          loader: 'react-hot-loader/webpack',
        },
      },
      {
        test: /\.(png|woff2|woff|mp4|jpg|svg)$/,
        loader: 'url-loader?limit=1',
      },
      !options.noCSS
        ? {
            test: /\.scss$/,
            // include: [path.resolve(__dirname, '../'), /components/, /node_modules/],
            loaders: [
              process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName:
                    process.env.NODE_ENV === 'development'
                      ? '[path][name]__[local]--[hash:base64:5]'
                      : '[hash:base64:5]',
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              'sass-loader',
            ],
            // include: [path.resolve(__dirname, '../'), /components/, 'node_modules']
          }
        : {
            test: /\.scss$/,
            use: 'null-loader',
          },
      !options.noCSS
        ? {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
          }
        : {
            test: /\.css$/,
            use: 'null-loader',
          },
    ].filter(Boolean),
  },

  resolve: {
    alias: {
      common: path.resolve(root, 'src/common/'),
      components: path.resolve(root, 'src/components/'),
      core: path.resolve(root, 'src/core/'),
      pages: path.resolve(root, 'src/pages/'),
      // deps
      react: path.resolve(root, 'node_modules/react'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      template: 'public/example.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __NODE_ENV__: JSON.stringify(process.env.NODE_ENV),
    }),
    //new BundleAnalyzerPlugin()
  ],
});

const server = Object.assign(
  setup({
    chunkPrefix: 'server-',
    noCSS: true,
    target: ['release', 'server'],
    resolve: {
      hellojs: path.resolve(root, 'src/__mocks__/hellojs/'),
      'source-map': path.resolve(root, 'node_modules/source-map'),
    },
  }),
  {
    entry: {
      server: './src/server',
    },
    target: 'node',
  }
);

module.exports = [server, setup()];
