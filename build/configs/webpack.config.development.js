import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
// import merge from 'webpack-merge'

const clientConfig = {
  devtool: 'source-map',
  context: path.resolve(__dirname, '../../'),
  entry: {
    react: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'react-router-config',
    ],
    app: [
      './entry/client.jsx',
    ],
  },
  output: {
    path: path.resolve(__dirname, '../../static'),
    pathinfo: true,
    filename: 'js/[name].[hash:7].js',
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, '../../node_modules')],
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
      },
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['cache-loader', 'babel-loader'],
          },
          {
            test: /\.tpl$/, // 如果不配置这个，HtmlWebpackPlugin默认使用ejs进行编译，同后端重复
            use: [{
              loader: 'html-loader',
              options: {
                removeComments: false,
              },
            }],
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['./static'], {
      root: path.resolve(__dirname, '../../'),
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../../entry/index.html'),
      inject: true,
      template: path.resolve(__dirname, '../../entry/index.tpl'),
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'react',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.HotModuleReplacementPlugin({
    }),
  ],
}

// const serverConfig = {
//   context: path.resolve(__dirname, '../server'),
//   entry: '',
//   output: {
//     path: path.resolve(__dirname, '../output/client'),
//     pathinfo: true,
//     filename: 'static/js/[name].js',
//     publicPath: '/',
//   },
//   resolve: {
//     modules: [path.resolve(__dirname, '../node_modules')],
//     extensions: ['.js', '.jsx', '.json'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//       },
//       {
//         oneOf: [
//           {
//             test: /\.jsx$/,
//             use: ['babel-loader'],
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: path.resolve(__dirname, '../output/index.html'),
//       inject: 'body',
//       template: path.resolve(__dirname, '../client/index.html'),
//     }),
//     new webpack.EnvironmentPlugin(['NODE_ENV']),
//   ],
// }

export default clientConfig // [clientConfig, serverConfig]
