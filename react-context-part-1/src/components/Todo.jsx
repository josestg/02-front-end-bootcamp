import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import styles from "./Todo.module.css";

const Todo = (props) => {
  const { id, title, completed } = props;

  const { delTodo, updateCompleteStatus } = useContext(TodoContext);

  return (
    <div className={`${styles.todos} ${completed ? styles.completed : ""}`}>
      <h4>{title}</h4>
      {/* true=>false. false =>true */}
      <button onClick={() => updateCompleteStatus(id, !completed)}>
        {completed ? "Undo" : "Done"}
      </button>
      <button onClick={() => delTodo(id)}>Delete</button>
    </div>
  );
};

export default Todo;
