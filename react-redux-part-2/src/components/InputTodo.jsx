import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo.slice";

const InputTodo = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const action = addTodo({
      title: title,
    });

    dispatch(action);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <br />
      <input
        type="text"
        placeholder="add new todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="add todo" />
    </form>
  );
};

export default InputTodo;
