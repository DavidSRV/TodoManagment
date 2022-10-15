import React from "react";
import { useSelector } from "react-redux";

function TaskList() {
  const stateTask = useSelector((state) => state.tasks);

  return (
    <>
      {stateTask.map((tasks) => (
        <div key={tasks.id}>
          <h1>{`Tarea número: ${tasks.id}`}</h1>
          <h2>{`Titulo: ${tasks.title}`}</h2>
          <p>{`${tasks.description}`}</p>
          <h3>{`Actual State of Task: ${tasks.completed ? 'Finish' : 'Incompleted'}`}</h3>
          
        </div>
      ))}
    </>
  );
}

export default TaskList;
