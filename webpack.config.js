const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  node: { fs: 'empty' },
  target: 'node',
  output: {
    library: '',
    libraryTarget: 'commonjs-module',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist')
  ]
}
