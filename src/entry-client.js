import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "./store";
import { composeWithDevTools } from "redux-devtools-extension";

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(reducer, preloadedState, composeWithDevTools());

import App from "./App";

ReactDom.hydrate(
  <Provider store={store}>
    <Router>
      <App styleName="hahahaha" />
    </Router>
  </Provider>,
  document.getElementById("app"),
  () => {
    console.log(Date.now(), "hydrate");
  }
);
