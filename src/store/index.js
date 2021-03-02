import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./reducers";

let middlewares = applyMiddleware(thunk);

let composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnhancers(middlewares));

export default store;
