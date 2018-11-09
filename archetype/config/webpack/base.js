const webpack = require("webpack");

const config = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.HELLO": JSON.stringify("hello")
    })
  ]
};

module.exports = config;
