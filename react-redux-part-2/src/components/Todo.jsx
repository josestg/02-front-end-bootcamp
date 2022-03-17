import { useDispatch } from "react-redux";
import { markAsCompleted, markAsInprogres } from "../redux/todo.slice";
import styles from "./Todo.module.css";

const Todo = (props) => {
  const { id, title, completed } = props;

  const dispatch = useDispatch();

  const handleClick = () => {
    if (completed) {
      const action = markAsInprogres({ id: id });
      dispatch(action);
    } else {
      const action = markAsCompleted({ id: id });
      dispatch(action);
    }
  };

  return (
    <div className={`${styles.todos} ${completed ? styles.completed : ""}`}>
      <h4>{title}</h4>
      <button onClick={handleClick}>{completed ? "Undo" : "Done"}</button>
    </div>
  );
};

export default Todo;
