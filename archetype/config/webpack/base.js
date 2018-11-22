require("dotenv").config();

const webpack = require("webpack");

const config = {
  plugins: [new webpack.EnvironmentPlugin(["AUTH0_DOMAIN", "AUTH0_CLIENTID", "AUTH0_REDIRECT_URI", "AUTH0_RESPONSE_TYPE", "AUTH0_SCOPE", "SERVER_HOST"])]
};

module.exports = config;
