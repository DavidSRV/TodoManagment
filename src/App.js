import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./style/compSytle/_AppStyle.scss";
import moon from "../src/assets/images/icon-moon.svg";
import sun from "../src/assets/images/icon-sun.svg";
import { selectDarkMode, toggletheme } from "./features/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useMediaQuery } from "react-responsive";

function App() {
  const stateTask = useSelector((state) => state.tasks);

  const darkMode = useSelector(selectDarkMode);

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggletheme());
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
    <div className={`App ${darkMode ? "--darkMode" : ""}`}>
      <div className={`App__background ${darkMode ? "--darkMode" : ""}`}></div>
      <main className="App__container">
        <div className="container__titleInput">
          <h1 className="title">TODO</h1>
          {!darkMode ? (
            <img
              className="inputTheme"
              src={moon}
              alt="inputThemeMoon"
              onClick={() => handleTheme()}
            ></img>
          ) : (
            <img
              className="inputTheme"
              src={sun}
              alt="inputThemeSun"
              onClick={() => handleTheme()}
            ></img>
          )}
        </div>
        <TaskForm darkMode={darkMode} />
        <TaskList
          filter={filter}
          setFilter={setFilter}
          darkMode={darkMode}
          handleFilterCompleted={handleFilterCompleted}
          handleFilterActive={handleFilterActive}
          handleFilterAll={handleFilterAll}
        />

        <Mobile>
          <div className={`inputs__state ${darkMode ? "--darkMode" : ""}`}>
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
        </Mobile>
      </main>
    </div>
  );
}

export default App;
