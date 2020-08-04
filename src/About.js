import React from "react";
import { connect } from "react-redux";

import { asyncAction, btnAction } from "./store";

export default connect(null, { asyncAction, btnAction })(function About(props) {
  const onTestAsyncAction = () => {
    props
      .asyncAction(Math.random())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onTestNormalAction = () => {
    props.btnAction(Math.random());
  };
  return (
    <div className="app">
      <button onClick={onTestAsyncAction}>异步Action</button>
      <button onClick={onTestNormalAction}>普通Action</button>
    </div>
  );
});
