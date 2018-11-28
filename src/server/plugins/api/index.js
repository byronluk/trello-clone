"use strict";
import routes from "./routes";

const plugin = {};

plugin.register = function(server, options, next) {
  for (const prefix in routes) {
    routes[prefix].forEach(r => {
      const route = {
        path: `/api/${prefix}/${r.path}`,
        method: r.method,
        config: {
          auth: "jwt",
          handler: r.handler
        }
      };
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
