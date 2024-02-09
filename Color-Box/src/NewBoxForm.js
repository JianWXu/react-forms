import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    color: "",
    width: "",
    height: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color: </label>
      <input
        id="color"
        type="text"
        name="color"
        placeholder="color name"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width: </label>
      <input
        id="width"
        type="number"
        name="width"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height: </label>
      <input
        id="height"
        type="number"
        name="height"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />
    </form>
  );
};

export default NewBoxForm;
