//
// This is the client side entry point for the React app.
//

import React from "react";
import { render, hydrate } from "react-dom";
import { routes } from "./routes";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { renderRoutes } from "react-router-config";
import { createBrowserHistory, createMemoryHistory } from "history";
import { canUseDOM } from "./utils";

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
const configureStore = initialState => {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

const store = configureStore(canUseDOM ? window.__PRELOADED_STATE__ : undefined);

const history = canUseDOM ? createBrowserHistory() : createMemoryHistory();

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

export { history };
