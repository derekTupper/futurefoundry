var webpack = require('webpack');
var path = require('path');

var projectRootPath = path.resolve(__dirname, './');
var assetsPath = path.resolve(projectRootPath, './dist');

console.log(path.resolve(projectRootPath, '../install/node_modules'));

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/app.jsx'
  ],
  output: {
    path: assetsPath,
    publicPath: './dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
    { test: /\.(js$|jsx$)/, exclude: /(node_modules)/ , loader: "babel-loader"},
    { test: /\.(png|jpg|jpeg)$/, exclude: /(node_modules)/, loader: 'url-loader?limit=2000000' },
    { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
    { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx','scss'],
    root: [
      path.join(__dirname, '../install/node_modules')
    ]
  },
  resolveLoader: {
    modulesDirectories: [
      '../install/node_modules'
    ]
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
    })
  ]
}
