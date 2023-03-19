import webpack from 'webpack';
import path from 'path';
import Dotenv from 'dotenv-webpack';

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]-[contenthash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': `"development"`,
    }),
    new Dotenv({
      path: path.resolve(__dirname, '..', `.env.development`),
    }),
  ],
  devServer: {
    hot: true,
    open: true,
    port: process.env.PORT || '3000',
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, '..', './public'),
    },
  },
};
