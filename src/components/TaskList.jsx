import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask, completedTask } from "../features/slices/taskSlice";
import close from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";
import "../style/compSytle/_TaskListStyle.scss";
import { selectDarkMode } from "../features/slices/themeSlice";
import { useEffect, useState } from "react";
// import { filterTask } from "../features/slices/taskFilterSlice";
// import {
//   allTask,
//   activeTask,
//   doneTask,
// } from "../features/slices/taskFilterSlice";

function TaskList() {
  const [filter, setFilter] = useState([]);

  const stateTask = useSelector((state) => state.tasks);
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    setFilter(stateTask);
  }, [stateTask]);

  console.log(filter);

  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleComplete = (taskId) => {
    dispatch(completedTask(taskId));
  };

  const handleFilterAll = () => {
    setFilter(stateTask);
  };

  const handleFilterActive = () => {
    const filterActive = stateTask.find((item) => item.completed === true)
    console.log(filterActive + ' busqueda find');
    console.log(filter + ' Estado filter')
    if(filterActive){
      setFilter([...filterActive])
    }else{
      console.log('item no found')
    }
  }


  //FILTER

  // let taskFilter = useSelector(filterTask);

  // const handleFilterAll = () => {
  //   dispatch(allTask(stateTask));
  // };

  // const handleFilterActive = () => {
  //   dispatch(activeTask(stateTask));
  // };

  // const handleFilterDone = () => {
  //   dispatch(doneTask(stateTask));
  // };

  return (
    <div className={`containerGeneral ${darkMode ? "--darkMode" : ""}`}>
      {filter.map((task) => (
        <div className={`tasks ${darkMode ? "--darkMode" : ""}`} key={task.id}>
          <div className="task__container">
            <div className="task__group">
              {!task.completed ? (
                <span
                  onClick={() => handleComplete(task.id)}
                  id="ref"
                  className={`task__select`}
                ></span>
              ) : (
                <div className="task__containerComplete">
                  <img
                    className="task__complete"
                    src={check}
                    alt="TaskCheck"
                  ></img>
                </div>
              )}

              <p
                className={`task__description ${
                  task.completed ? "--completed" : ""
                }`}
              >{`${task.description}`}</p>
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
      {!filter.length && (
        <div className="Container0Tasks">
          <p>Oops!! It seems that there are no tasks yet</p>
        </div>
      )}
      <div className="inputs__container">
        <p className="inputs__taskLength">{`${filter.length} items left`}</p>
        <div className={`inputs__state`}>
          <p
            className={`inputs__all ${darkMode ? "--darkMode" : ""}`}
            onClick={handleFilterAll}
          >
            All
          </p>
          <p
            className={`inputs__active ${darkMode ? "--darkMode" : ""}`}
            onClick={handleFilterActive}
          >
            Active
          </p>
          <p
            className={`inputs__completed ${darkMode ? "--darkMode" : ""}`}
            onClick={null}
          >
            Completed
          </p>
        </div>
        <p className={`inputs__clear ${darkMode ? "--darkMode" : ""}`}>
          Clear Completed
        </p>
      </div>
    </div>
  );
}

export default TaskList;
