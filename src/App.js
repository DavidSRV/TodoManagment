import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./style/compSytle/_AppStyle.scss";

function App() {
  return (
    <div className="App">
      <div className="App__background"></div>
      <main className="App__container">
        <h1>TODO</h1>
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}

export default App;
