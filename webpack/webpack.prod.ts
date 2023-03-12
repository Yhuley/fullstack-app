import webpack from 'webpack';
import path from 'path';
import RefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import Dotenv from 'dotenv-webpack';

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': `"production"`,
    }),
    new RefreshPlugin(),
    new BundleAnalyzerPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', `.env.production`),
    }),
  ],
};
