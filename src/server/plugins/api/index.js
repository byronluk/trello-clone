"use strict";

const plugin = {};

plugin.register = function(server, options, next) {
  console.log("api plugin");
  server.route({
    method: "GET",
    path: "/testing",
    handler: (request, reply) => {
      console.log('hello');
      reply(null, "hello")
    }
  });
  next();
};

plugin.register.attributes = {
  name: "Brello Api",
  version: "0.0.1"
};

module.exports = plugin;
