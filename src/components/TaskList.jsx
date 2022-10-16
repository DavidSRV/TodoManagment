import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import {deleteTask} from '../features/tasks/taskSlice'

function TaskList() {
  const stateTask = useSelector((state) => state.tasks);
  const dispatch = useDispatch()

  const handleDelete = (taskId) =>{
    dispatch(deleteTask(taskId)); 
  }

  return (
    <>
      {stateTask.map((task) => (
        <div key={task.id}>
          <h2>{`Titulo: ${task.title}`}</h2>
          <p>{`${task.description}`}</p>
          <h3>{`Actual State of Task: ${
            task.completed ? "Finish" : "Incompleted"
          }`}</h3>
          <button onClick={() => handleDelete(task.id)}>Delete task</button>
        </div>
      ))}
    </>
  );
}

export default TaskList;
