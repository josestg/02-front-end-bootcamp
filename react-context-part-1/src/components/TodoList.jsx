import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { loading, error, todos } = useContext(TodoContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
