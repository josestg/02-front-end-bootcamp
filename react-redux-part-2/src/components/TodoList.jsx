import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCounterAPI } from "../redux/counter.slice";
import { fetchTodosAPI } from "../redux/todo.slice";
import Todo from "./Todo";

const TodoList = () => {
  const { loading, error, todos } = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodosAPI());
    dispatch(fetchCounterAPI());
  }, [dispatch]);

  console.log(loading, error, todos);

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
