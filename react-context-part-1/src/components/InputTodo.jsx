import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const InputTodo = () => {
  const [title, setTitle] = useState("");

  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title);
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
