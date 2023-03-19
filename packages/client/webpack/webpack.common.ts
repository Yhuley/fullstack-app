import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const config = {
  entry: path.resolve(__dirname, '..', 'src', 'app', 'index.tsx'),
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
    alias: {
      ui: path.resolve(__dirname, '..', 'src', 'ui'),
      data: path.resolve(__dirname, '..', 'src', 'data'),
      app: path.resolve(__dirname, '..', 'src', 'app'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: path.join('.', 'js', '[name].[chunkhash].js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
  ],
};
