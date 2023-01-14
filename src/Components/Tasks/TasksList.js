import Wrapper from "../UI/Wrapper";
const TaskList = (props) => {
  return (
    <Wrapper>
      <ul>
        {props.tasks.map((task) => (
          <li key={task.id}>{task.name} </li>
        ))}
      </ul>
    </Wrapper>
  );
};
export default TaskList;
