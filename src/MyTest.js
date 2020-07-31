import React from "react";

const style = {
  color: "blue",
  fontSize: "24px",
};

export const MyTest = () => {
  console.log("rendered myTest component");
  return (
    <div
      onClick={() => {
        console.log("haha. you clicked me.");
      }}
      style={style}
    >
      I'm produced.
    </div>
  );
};
