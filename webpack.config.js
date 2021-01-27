const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
      // {
      //   test: [/\.vert$/, /\.frag$/],
      //   use: "raw-loader"
      // },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
      //   use: "file-loader"
      // },
      // {
      //   test: /\.(ogg|mp3|wav|mpe?g)$/i,
      //   loader: 'file-loader',
      //   query: {
      //     name: 'static/media/[name].[hash:8].[ext]'
      //   }
      // }

    ],
  },
};