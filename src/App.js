import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./style/compSytle/_AppStyle.scss";
import moon from "../src/assets/images/icon-moon.svg";
import sun from "../src/assets/images/icon-sun.svg";
import { selectDarkMode, toggletheme } from "./features/slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const darkMode = useSelector(selectDarkMode);

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggletheme());
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
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
