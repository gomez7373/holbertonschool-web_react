const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./js/main.ts",  // Path to your Task 1 TypeScript file
  mode: 'development',
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,  // Match TypeScript files
        loader: "ts-loader",
        options: {
          transpileOnly: true  // Faster builds by skipping type checking
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]  // Resolve TypeScript and JavaScript files
  },
  devServer: {
    static: path.join(__dirname, "dist"),  // Serve static files from 'dist' folder
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",  // Output filename
    path: path.resolve(__dirname, "dist")  // Output directory
  }
};

