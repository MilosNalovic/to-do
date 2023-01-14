import Wrapper from "../UI/Wrapper";
import Button from "../UI/Button";
import styles from "./AddTask.module.css";
const AddTask = (props) => {
  return (
    <Wrapper className={styles.formWrapper}>
      <p>To do manager :)</p>
      <form className={styles.form}>
        <input type="text"></input>
        <Button type="submit">Add Task</Button>
      </form>
    </Wrapper>
  );
};
export default AddTask;
