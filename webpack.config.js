const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, 'src/index.js')
  },
  output: {
    filename: 'popup.js',
    path: path.join(__dirname, 'chrome/scripts')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true
            }
          },
          'sass-loader'
        ],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
