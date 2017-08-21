const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
  entry: 'src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    hot: true,
    port: 9000,
    open: true
  }
}
