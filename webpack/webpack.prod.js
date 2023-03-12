const webpack = require('webpack');
const RefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
