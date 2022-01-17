import React from "react";

import "./FluidBar.scss";

function FluidBar(props) {
  return (
    <div className="fluid_bar">
      <div
        className="bar"
        style={{
          width: props.width,
          backgroundColor: props.backgroundColor,
        }}
      ></div>
    </div>
  );
}

export default FluidBar;
