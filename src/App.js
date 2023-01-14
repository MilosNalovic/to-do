import { useState, Fragment } from "react";
import AddTask from "./Components/Tasks/AddTask";
import TaskList from "./Components/Tasks/TasksList";
import styles from "./App.module.css";
function App() {
  const [tasksList, setTasksList] = useState([]);
  const addTaskHandler = (task) => {
    setTasksList((prevTasks) => {
      return [...prevTasks, { name: task, id: Math.random().toString() }];
    });
  };
  const removeTaskHandler = (id) => {
    setTasksList(() => {
      return tasksList.filter((task) => task.id !== id);
    });
  };
  const tasksListJsx = (
    <TaskList tasks={tasksList} removeTask={removeTaskHandler} />
  );
  return (
    <Fragment>
      <AddTask onAddTask={addTaskHandler} />
      {tasksList && tasksList.length ? (
        tasksListJsx
      ) : (
        <p className={styles.conditionalP}>No tasks ATM :(</p>
      )}
    </Fragment>
  );
}

export default App;
