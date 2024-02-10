import React, { useState } from "react";

function NewToDoForm({ addToDo }) {
  const INITIAL_STATE = {
    task: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addToDo({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Enter New Task: </label>
      <input
        id="task"
        type="text"
        name="task"
        placeholder="New Task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>Add Task to List</button>
    </form>
  );
}

export default NewToDoForm;
