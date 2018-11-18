import React from "react";
import PropTypes from "prop-types";

import Home from "./components/home";
import AuthCallback from "./auth/callback";

import { withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const Root = ({ route, children }) => {
  return (
    <div>
      {renderRoutes(route.routes)}
      {children}
    </div>
  );
};

Root.propTypes = {
  route: PropTypes.object,
  children: PropTypes.object
};

const routes = [
  {
    path: "/",
    init: "./init-app",
    component: withRouter(Root),
    routes: [
      {
        path: "/",
        exact: true,
        init: "./init-home",
        component: Home
      },
      {
        path: "/callback",
        exact: true,
        component: AuthCallback
      }
    ]
  }
];

export { routes };
