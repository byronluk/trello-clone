"use strict";

const plugin = {};

plugin.register = function(server, options, next) {
  server.route({
    method: "GET",
    path: "/testing",
    handler: (request, reply) => reply(null, "hello")
  });
  next();
};

plugin.register.attributes = {
  name: "Trello Clone",
  version: "0.0.1"
};
