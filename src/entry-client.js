import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store";
import { composeWithDevTools } from "redux-devtools-extension";

const thunkMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  if (typeof action === "function") {
    console.log(action, "=============");
    return action(dispatch);
  }
  const result = next(action);
  return result;
};
const logMiddleware = ({ getState, dispatch }) => (next) => (action) => {
  const result = next(action);
  return result;
};
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(
  reducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logMiddleware))
);

import App from "./App";

ReactDom.hydrate(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app"),
  () => {
    console.log(Date.now(), "hydrate");
  }
);
