import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function BoxList() {
  const [boxes, setBox] = useState();
  const addBox = newBox => {
    setBox(boxes => [...boxes, ...newBox]);
  };

  return (
    <div className="BoxList">
      
      <NewBoxForm addBox={addBox}/>
      {boxes.map({color, width, height})=>(
        <div>
       <Box 
       color={color} 
       width={width} 
       height={height} />
       </div>
      )}
      
    </div>
  );
}

export default BoxList;
