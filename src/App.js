import React from "react";
import { Switch, Link, Route } from "react-router-dom";

import "./App.less";
import routes from "./routes";

export default function App(props) {
  const buttonClick = () => {
    console.log("haha shabi.");
  };
  return (
    <div className="app">
      <ul className={props.styleName}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <button onClick={buttonClick}>click me.</button>
      <Switch>
        {routes.map(({ path, exact, component, ...rest }) => (
          <Route
            {...rest}
            key={path}
            path={path}
            exact={exact}
            component={component}
          />
        ))}
      </Switch>
    </div>
  );
}
