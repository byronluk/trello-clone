const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

const config = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.HELLO": JSON.stringify("hello")
    }),
    new Dotenv()
  ]
};

module.exports = config;
