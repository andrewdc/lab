var webpack = require("webpack");
var path = require("path");
var node_modules_dir = path.join(__dirname, "node_modules");

var config = {
  cache: true,
  context: __dirname,
  entry: {
    app: [
      "webpack/hot/dev-server",
      "./index.js"
    ]
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    noParse: [],
    loaders: [{
      test: /\.jsx/,
      loader: "jsx-loader?harmony"
    }, {
      test: /\.js$/,
      loader: "jsx-loader?harmony"
    }, {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "autoprefixer-loader?browsers=last 2 version",
      "sass-loader?sync"
      ]
    }, {
      test: /\.css$/,
      loaders: ["style-loader", "css-loader?sourceMap", "autoprefixer-loader?browser=last 2 version", ]
    }, {
      test: /\.(jpg|png|svg|gif|eot|ttf|woff)$/,
      loader: "url-loader",
      query: {
        name: "[path][name].[ext]",
        context: "src",
        limit: "8192"
      }
    }, ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    // add aliases for commonly used modules
    alias: {

    },
    //this teaches webpack extensions so you can require("file") rather than require(file.ext).
    extensions: ["", ".js", ".jsx", ".css", ".scss", ".jpg", ".png", ".svg", ".gif", "html"],
    modulesDirectories: ["components", "base", "node_modules"]
  },
};

module.exports = config;
