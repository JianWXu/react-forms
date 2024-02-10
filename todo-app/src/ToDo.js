import React from "react";

function ToDo({ task, deleteTask, index }) {
    
  const handleClick = () => {
    deleteTask(index);
  };

  return (
    <div className="ToDo">
      <div className="toDoTask">
        {task}
        <button onClick={handleClick}>Task Done!</button>
      </div>
    </div>
  );
}

export default ToDo;
