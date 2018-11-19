//
// This is the client side entry point for the React app.
//

import React from "react";
import { render, hydrate } from "react-dom";
import { routes } from "./routes";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { canUseDOM } from "./utils";
import store, { history } from "./store";

//
// PWA registration
//
// import { notify } from "react-notify-toast";

//
// Add the client app start up code to a function as window.webappStart.
// The webapp's full HTML will check and call it once the js-content
// DOM is created.
// require.ensure(
//   ["./sw-registration"],
//   require => {
//     require("./sw-registration")(notify);
//   },
//   "sw-registration"
// );
//

//
// Redux configure store with Hot Module Reload
//

const start = App => {
  const jsContent = document.querySelector(".js-content");
  const reactStart = window.__PRELOADED_STATE__ && jsContent.innerHTML ? hydrate : render;

  reactStart(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    jsContent
  );
};

if (canUseDOM) {
  window.webappStart = () => start(() => renderRoutes(routes));
}

//
// Hot Module Reload setup
//
if (module.hot) {
  module.hot.accept("./routes", () => {
    const r = require("./routes");
    start(() => renderRoutes(r.routes));
  });
}
