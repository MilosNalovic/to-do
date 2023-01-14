import { useState } from "react";
import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import styles from "./AddTask.module.css";
const AddTask = (props) => {
  const [task, setTask] = useState([]);
  const addTaskHander = (event) => {
    event.preventDefault();
    props.onAddTask(task);
    setTask("");
  };
  const taskInput = (event) => {
    setTask(event.target.value);
  };
  return (
    <Wrapper className={styles.formWrapper}>
      <p>To do manager :)</p>
      <form className={styles.form}>
        <input onChange={taskInput} type="text" value={task}></input>
        <Button type="submit" onClick={addTaskHander}>
          Add Task
        </Button>
      </form>
    </Wrapper>
  );
};
export default AddTask;
