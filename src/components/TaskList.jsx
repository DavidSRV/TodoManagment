import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask, completedTask } from "../features/tasks/taskSlice";
import close from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";
import "../style/compSytle/_TaskListStyle.scss";

function TaskList() {
  const stateTask = useSelector((state) => state.tasks);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleComplete = (taskId) => {
    dispatch(completedTask(taskId));
  };
  
  function addClass(taskId){
    handleComplete(taskId)
    
    const completed = stateTask.indexOf(
      stateTask.find((task) => task.id === taskId)
    );

    
    
    
  }
  

  return (
    <div className="containerGeneral">
      {stateTask.map((task) => (
        <div className="tasks" key={task.id}>
          <div className="task__container">
            <div className="task__group">
              <span
                onClick={() => addClass(task.id)}
                ref={ref}
                className={`task__circle ${stateTask.completed ? '--completed' : ''}`}
              ></span>
              <p>{`${task.description}`}</p>
            </div>
            <img
              className="task__closeimg"
              src={close}
              onClick={() => handleDelete(task.id)}
              alt="closeImg"
            />
          </div>
        </div>
      ))}
      {!stateTask.length && (
        <div className="Container0Tasks">
          <p>Oops!! It seems that there are no tasks yet</p>
        </div>
      )}
      <div className="inputs__container">
        <p className="inputs__taskLength">{`${stateTask.length} items left`}</p>
        <div className="inputs__state">
          <p className="inputs__all">All</p>
          <p className="inputs__active">Active</p>
          <p className="inputs__completed">Completed</p>
        </div>
        <p className="inputs__clear">Clear Completed</p>
      </div>
    </div>
  );
}

export default TaskList;
