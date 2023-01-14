import { useState, Fragment } from "react";
import AddTask from "./Components/Tasks/AddTask";
import TaskList from "./Components/Tasks/TasksList";
function App() {
  const [tasksList, setTasksList] = useState([]);
  const addTaskHandler = (task) => {
    setTasksList((prevTasks) => {
      return [...prevTasks, { name: task, id: Math.random().toString() }];
    });
  };
  return (
    <Fragment>
      <AddTask onAddTask={addTaskHandler} />
      <TaskList tasks={tasksList} />
    </Fragment>
  );
}

export default App;
