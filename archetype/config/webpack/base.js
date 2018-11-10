const webpack = require("webpack");
const dotenv = require("dotenv-webpack");

const config = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.HELLO": JSON.stringify("hello")
    }),
    new dotenv()
  ]
};

module.exports = config;
