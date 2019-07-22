const path = require('path')

const ROOT_PATH = path.resolve(__dirname)
const APP_PATH = path.resolve(ROOT_PATH, 'src')
const BUILD_PATH = path.resolve(ROOT_PATH, 'chrome/scripts')

const isProd = process.env.NODE_ENV === 'production'

console.log(isProd)

module.exports = {
  mode: 'none',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'popup.js',
    path: BUILD_PATH
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
        include: APP_PATH
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: APP_PATH
      }
    ]
  },
  resolve: {
    extensions: ['.scss', '.js']
  },
  devtool: isProd ? 'hidden-source-map' : 'source-map'
}
