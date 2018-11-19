import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory, createMemoryHistory } from "history";

import rootSaga from "./sagas";
import createRootReducer from "./reducers";
import { canUseDOM } from "./utils";

const history = canUseDOM ? createBrowserHistory() : createMemoryHistory();
const sagaMiddleware = createSagaMiddleware();

let composeEnhancers = compose;
if (canUseDOM && process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const middleware = [sagaMiddleware];

const configureStore = initialState => {
  const store = createStore(createRootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

const store = configureStore(canUseDOM ? window.__PRELOADED_STATE__ : undefined);

export default store;
export { history };
