import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaks } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid"; // Nos permite generar Id únicos

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch(); // Nos permite usar los reducers del slice

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTaks({
        ...task,
        id: uuid(),
      })
    );
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
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
