import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./style/compSytle/_AppStyle.scss";
import moon from '../src/assets/images/icon-moon.svg';
import snn from '../src/assets/images/icon-sun.svg';

function App() {
  return (
    <div className="App">
      <div className="App__background"></div>
      <main className="App__container">
        <div className="container__titleInput">
        <h1 className="title">TODO</h1>
          <img className="inputTheme" src={moon} alt='Themeinput' ></img>
        </div>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
