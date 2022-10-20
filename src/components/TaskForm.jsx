import React, {useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaks } from "../features/slices/taskSlice";
import { v4 as uuid } from "uuid"; // Nos permite generar Id únicos
import "../style/compSytle/_TaskFormStyle.scss";
import { selectDarkMode } from "../features/slices/themeSlice";

function TaskForm() {
  const [task, setTask] = useState({
    description: "",
    completed: false,
  });

  const ref = useRef(null);

  const darkMode = useSelector(selectDarkMode);

  const dispatch = useDispatch(); 

  const [validate, setValidate] = useState(false);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    setValidate(true);
  };

  const handleSubmit = (e) => {
    console.log(e.target.name)
    if (validate) {
      e.preventDefault();
      dispatch(
        addTaks({
          ...task,
          id: uuid(),
        })
      );
      ref.current.value = ''
      setValidate(false)
    } else {
      e.preventDefault();
    }
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <input
      ref={ref}
        className={`input ${darkMode ? "--darkMode" : ""}`}
        name="description"
        type="text"
        placeholder="Type Task"
        onChange={handleChange}
      />
    </form>
  );
}

export default TaskForm;
