import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaks } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid"; // Nos permite generar Id únicos
import '../style/compSytle/_TaskFormStyle.scss'

function TaskForm() {
  const [task, setTask] = useState({
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
      <input className="input"
        name="description"
        type="text"
        placeholder="Type Task"
        onChange={handleChange}
      />

      {/* <button>Save</button> */}
    </form>
  );
}

export default TaskForm;
