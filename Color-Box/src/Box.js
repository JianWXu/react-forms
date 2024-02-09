import React from "react";

function Box({ color, width, height, deleteBox, index }) {
  let widthString = `${width}0px`;
  let heightString = `${height}0px`;

  const handleClick = () => {
    deleteBox(index);
  };

  return (
    <div className="Box">
      <div
        style={{
          backgroundColor: color,
          width: widthString,
          height: heightString,
        }}
      >
        <button onClick={handleClick}>X</button>
      </div>
    </div>
  );
}

export default Box;
