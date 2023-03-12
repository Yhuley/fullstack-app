import webpack from 'webpack';
import RefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

module.exports = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': `"production"`,
    }),
    new RefreshPlugin(),
    new BundleAnalyzerPlugin(),
  ],
};
