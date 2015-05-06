const webpack = require("webpack");
const path = require("path");
const bower_dir = path.join(__dirname, "bower_components");
const node_modules_dir = path.join(__dirname, "node_modules");

const config = {
  cache: true,
  context: __dirname,
  // avoiding unnecessary re-bundling of assets we don"t change e.g. vendor stuffs
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp("^" + name + '$'));
  },
  entry: {
    //split up for chunking
    app: [
      "webpack/hot/dev-server",
      "./src/index.js"
    ],
    vendors: ["react"]
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
        loader: "jsx-loader?harmony",
        exclude: [bower_dir, node_modules_dir]
      }, {
        test: /\.js$/,
        loader: "jsx-loader?harmony",
        exclude: [bower_dir, node_modules_dir]
      }, {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader?sourceMap", "autoprefixer-loader?browsers=last 2 version",
          "sass-loader?sourceMap"
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
      },
      //{ test: /\.html$/, loader: 'jsx-loader!imports?React=react!html-jsx-loader'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //new webpack.optimize.CommonsChunkPlugin("common.js", 2),
    //chunking plugin - matches key, chunks to file. Chunk vendors will cache after first load and likely not change.
    new webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js", Infinity)
  ],
  resolve: {
    // add aliases for commonly used modules
    alias: {

    },
    //this teaches webpack extensions so you can require("file") rather than require(file.ext).
    extensions: ["", ".js", ".jsx", ".css", ".scss", ".jpg", ".png", ".svg", ".gif", "html"],
    modulesDirectories: ["src", "node_modules"]
  },
};

//add noParse vendors here
config.addVendor("react", bower_dir + "/react/react.js");

module.exports = config;