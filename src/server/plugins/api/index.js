"use strict";
import routes from "./routes";

const plugin = {};

plugin.register = function(server, options, next) {
  for (const prefix in routes) {
    routes[prefix].forEach(route => {
      route.path = `/api/${prefix}/${route.path}`;
      server.route(route);
    });
  }

  next();
};

plugin.register.attributes = {
  name: "Brello Api",
  version: "0.0.1"
};

module.exports = plugin;
