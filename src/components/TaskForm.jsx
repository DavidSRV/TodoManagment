import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaks } from "../features/slices/taskSlice";
import { v4 as uuid } from "uuid"; // Nos permite generar Id únicos
import '../style/compSytle/_TaskFormStyle.scss'
import { selectDarkMode, toggletheme } from "../features/slices/themeSlice";


function TaskForm() {
  const [task, setTask] = useState({
    description: "",
    completed: false,
  });

  const darkMode = useSelector(selectDarkMode);

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
      <input className={`input ${darkMode ? '--darkMode' : ''}`}
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
