import React from "react";

function Box({ color, width, height }) {
  let widthString = `${width}0px`;
  let heightString = `${height}0px`;

  return (
    <div className="Box">
      <div
        style={{
          backgroundColor: color,
          width: widthString,
          height: heightString,
        }}
      ></div>
    </div>
  );
}

export default Box;
