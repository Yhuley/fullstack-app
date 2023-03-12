import webpack from 'webpack';
import path from 'path';
import Dotenv from 'dotenv-webpack';

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',

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
    static: {
      directory: path.resolve(__dirname, '..', './public'),
    },
  },
};
