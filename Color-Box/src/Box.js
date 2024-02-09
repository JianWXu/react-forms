import React from "react";

function Box({ color, width, height }) {
  let width = `${width}0px`;
  let height = `${height}0px`;

  return (
    <div className="Box">
      <div
        style={{ backgroundColor: color, width: width, height: height }}
      ></div>
    </div>
  );
}

export default Box;
