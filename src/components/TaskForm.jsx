import React, { useState } from "react";
import {} from ''

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
  };

  return (
    <form action="#" onClick={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Title"
        onChange={handleChange}
      />

      <textarea
        onChange={handleChange}
        name="description"
        placeholder="Description"
        id=""
        cols="30"
        rows="10"
      ></textarea>

      <button>Save</button>
    </form>
  );
}

export default TaskForm;
