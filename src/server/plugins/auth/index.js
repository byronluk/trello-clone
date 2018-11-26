"use strict";

const jwt = require("hapi-auth-jwt2");
const jwksRsa = require("jwks-rsa");
const validateUser = require("./validate");

const plugin = {};

plugin.register = function(server, options, next) {
  server.register(jwt, err => {
    if (err) console.log(err);

    server.auth.strategy("jwt", "jwt", {
      complete: true,
      key: jwksRsa.hapiJwt2Key({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri: process.env.AUTH0_JWKS_URI
      }),
      verifyOptions: {
        audience: process.env.AUTH0_AUDIENCE,
        issuer: `https://${process.env.AUTH0_DOMAIN}`,
        algorithms: ["RS256"]
      },
      validateFunc: validateUser
    });

    server.route({
      method: "GET",
      path: "/api/public",
      config: {
        auth: false,
        handler: (req, res) => {
          res({
            message: "Hello from a public endpoint!"
          });
        }
      }
    });

    server.route({
      method: "GET",
      path: "/api/private",
      config: {
        auth: "jwt",
        handler: (req, res) => {
          res({
            message: "hello from a private endpoint"
          });
        }
      }
    });
  });

  next();
};

plugin.register.attributes = {
  name: "brello auth",
  version: "0.0.1"
};

module.exports = plugin;
