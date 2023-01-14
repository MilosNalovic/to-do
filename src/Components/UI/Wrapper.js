import styles from "./Card.module.css";
const Wrapper = (props) => {
  return (
    <div className={`${props.className} ${styles.card}`}>{props.children}</div>
  );
};
export default Wrapper;
