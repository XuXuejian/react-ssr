import React from "react";
import ReactDom from "react-dom";

import { MyTest } from "./MyTest";

ReactDom.hydrate(<MyTest />, document.getElementById("app"), () => {
  console.log(Date.now(), "render");
});
