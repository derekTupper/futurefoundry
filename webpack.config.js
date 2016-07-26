var webpack = require('webpack');

module.exports = {
  entry: [
    './src/app.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
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
    extensions: ['', '.js', '.jsx','scss']
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
