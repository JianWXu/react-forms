import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const addBox = newBox => {
    setBoxes(boxes => [...boxes, { ...newBox }]);
  };
  const deleteBox = index => {
    setBoxes(allBoxes => allBoxes.filter((box, i) => i !== index));
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <>
        {boxes.map(({ color, width, height }, index) => (
          <div key={index}>
            <Box
              color={color}
              width={width}
              height={height}
              index={index}
              deleteBox={deleteBox}
            />
          </div>
        ))}
      </>
    </div>
  );
}

export default BoxList;
