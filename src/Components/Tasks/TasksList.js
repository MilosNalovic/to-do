import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import styles from "./TasksList.module.css";
const TaskList = (props) => {
  return (
    <Wrapper className={styles.tasks}>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>
            <span>{task.name}</span>
            <Button
              className={styles.button}
              onClick={() => props.removeTask(task.id)}
            >
              Delete task
            </Button>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default TaskList;
