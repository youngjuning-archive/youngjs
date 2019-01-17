const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules/',
      },
    ],
  },
}
// browerslist caniuse
