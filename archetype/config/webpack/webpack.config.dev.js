const webpack = require("webpack");

const myConfig = {
  plugins: [
    new webpack.DefinePlugin({
      HELLO: JSON.stringify("hello")
    })
  ]
};

module.exports = myConfig;
