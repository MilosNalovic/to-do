import Wrapper from "../UI/Wrapper";
import styles from "./TasksList.module.css";
const TaskList = (props) => {
  return (
    <Wrapper className={styles.tasks}>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>{task.name} </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default TaskList;
