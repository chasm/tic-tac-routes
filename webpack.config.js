var webpack = require('webpack')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var env = process.env.WEBPACK_ENV
var WebpackDevServer = require('webpack-dev-server')
var path = require('path')

var host = '0.0.0.0'
var port = '4000'

var plugins = [], outputFile
var config

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  outputFile = 'bundle.min.js'
} else {
  outputFile = 'bundle.js'
}

config = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/public/js',
    filename: outputFile,
    publicPath: __dirname + '/public',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: [ '', '.js', '.jsx' ],
  },
  plugins: plugins,
}

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    contentBase: './public',
    hot: true,
    debug: true,
  }).listen(port, host, function (err) {
    if (err) { console.log(err) }

    console.log('Local web server running at http://' + host + ':' + port)
  })
}

module.exports = config
