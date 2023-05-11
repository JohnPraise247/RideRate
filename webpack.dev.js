// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.development') });
require('dotenv').config();
const webpack = require('webpack');

const port = 8020;
const openBrowser = false;

// inject envs
let plugins = [
  new webpack.ProvidePlugin({m: "mithril"})
];
// let plugins = [new MiniCssExtractPlugin()];
let envs = {};
Object.keys(process.env).filter(key => key.startsWith('MITHRIL_')).forEach(key => {
  envs[key] = JSON.stringify(process.env[key]);
});
plugins.push(new webpack.DefinePlugin(envs));

let app = ['./client/index.js'];
let rules = [];
// let rules = [{
//   test: /\.css$/i,
//   use: ["style-loader", "css-loader"],
//   // test: /.s?css$/,
//   // // test: /\.css$/i,
//   // use: [MiniCssExtractPlugin.loader,"style-loader", "css-loader"],
// }];


module.exports = {
  entry: {
    app: app,
  },
  output: {
    filename: "static/bundle.min.js",
    path: path.resolve(__dirname, ''),
    publicPath: "/",
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: port,
    open: openBrowser,
    historyApiFallback: {
      index: 'index.html',
    },
    // proxy: {
    //   "/api": "http://localhost:3750"
    // },
    static: 'public',
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
  //     // `...`,
  //     new CssMinimizerPlugin(),
  //   ],
  // },
  plugins: plugins,
  module: {
    rules: rules,
  },
};


// try {
//   fs.writeFileSync('build/bundle.min.css', coutput.styles);
//   console.log("CSS files has been minified");
// } catch (err) {
//   console.error(err);
// }