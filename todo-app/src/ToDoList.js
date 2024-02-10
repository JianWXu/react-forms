import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDoList, setToDoList] = useState([]);
  const addToDo = newToDo => {
    setToDoList(toDoList => [...toDoList, { ...newToDo, id: uuid() }]);
  };
  const deleteTask = index => {
    setToDoList(allTasks => allTasks.filter((task, i) => i !== index));
  };

  return (
    <div className="ToDoList">
      <h3>To Do List</h3>
      <NewToDoForm addToDo={addToDo} />
      {toDoList.map(({ task, id }, index) => (
        <div key={index}>
          <ToDo key={id} index={index} deleteTask={deleteTask} task={task} />
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
