const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    vendors: ['jquery'],
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors'}),
    new HtmlWebpackPlugin()
  ],
  devServer: {
    contentBase: __dirname + "/dist",
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 9000,
    host: '0.0.0.0'
  }
}
