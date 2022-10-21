import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  completedTask,
  clearCompleted,
} from "../features/slices/taskSlice";
import close from "../assets/images/icon-cross.svg";
import check from "../assets/images/icon-check.svg";
import "../style/compSytle/_TaskListStyle.scss";
import { selectDarkMode } from "../features/slices/themeSlice";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useMediaQuery } from "react-responsive";

function TaskList() {
  const stateTask = useSelector((state) => state.tasks);
  const darkMode = useSelector(selectDarkMode);

  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleComplete = (taskId) => {
    dispatch(completedTask(taskId));
  };

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setFilter(stateTask);
  }, [stateTask]);

  const handleFilterAll = () => {
    if (stateTask.length === 0) {
      swal("There are no pending tasks", {
        className: "alert",
      });
    } else {
      setFilter(stateTask);
    }
  };

  const handleFilterActive = () => {
    const filterActive = stateTask.filter((item) => item.completed === false);
    if (filterActive.length >= 1) {
      setFilter([...filterActive]);
    } else {
      swal("There are no active tasks", {
        className: "alert",
      });
    }
  };

  const handleFilterCompleted = () => {
    const filterCompleted = stateTask.filter((item) => item.completed === true);
    if (filterCompleted.length >= 1) {
      setFilter([...filterCompleted]);
    } else {
      swal("There are no completed tasks", {
        className: "alert",
      });
    }
  };

  let Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ query: "(max-width:500px)" });
    return isMobile ? children : null;
  };

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
            onClick={handleFilterCompleted}
          >
            Completed
          </p>
        </div>
        <p
          className={`inputs__clear ${darkMode ? "--darkMode" : ""}`}
          onClick={handleClear}
        >
          Clear Completed
        </p>
      </div>
    </div>      
  );
}

export default TaskList;
