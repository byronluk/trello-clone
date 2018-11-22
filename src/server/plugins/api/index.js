"use strict";

const plugin = {};

plugin.register = function(server, options, next) {
  server.route({
    method: "GET",
    path: "/account/init",
    handler: (request, h) => {
      /* eslint-disable no-console */
      console.log("handling account init request");
      console.log(request.query);

      h(null, "hello");
    }
  });

  next();
};

plugin.register.attributes = {
  name: "Brello Api",
  version: "0.0.1"
};

module.exports = plugin;
