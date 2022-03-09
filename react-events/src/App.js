import { useEffect, useState } from "react";
import * as utils from "./utils/utils";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  // [{id: 1, title: "Todo 1", description: "Desc 1", user: "User 1"}]
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // mengambil todoList dari localStorage apabila ada.
    const storage = localStorage.getItem("todoList");
    if (storage !== null) {
      // Jika kita menemukan ada data di localStorage,
      // kita ambil datanya dan kita jadikan sebagai initial state untuk
      // todoList.
      const parsed = JSON.parse(storage);
      setTodoList(parsed);
    }
  }, []);

  const onChangeInput = (updates) => setTitle(updates);
  const onChangeDescription = (updates) => setDescription(updates);
  const onChangeUser = (updates) => setUser(updates);

  // const handleAddTodoList = (event) => {

  const handleAddTodoList = (event) => {
    event.preventDefault();

    // creates a new user instance.
    const nextID = todoList.length + 1;
    const newTodo = utils.createUser(nextID, title, description, user);

    const copy = utils.copyArrayOfObject(todoList);
    copy.push(newTodo);
    setTodoList(copy);

    // simpan ke localStorage.
    localStorage.setItem("todoList", JSON.stringify(copy));
  };
  return (
    <div>
      <h4>Todo Form</h4>
      <form onSubmit={handleAddTodoList}>
        <label>Title</label>
        <br />
        <input
          type="text"
          placeholder="type your todo title"
          onChange={(event) => onChangeInput(event.target.value)}
        />
        <br />
        <label>Desc</label>
        <br />
        <textarea
          type="text"
          placeholder="type your todo description"
          onChange={(event) => onChangeDescription(event.target.value)}
        />
        <br />
        <label>User</label>
        <br />
        <input
          type="text"
          placeholder="type your todo user"
          onChange={(event) => onChangeUser(event.target.value)}
        />
        <br />
        <input type="submit" value="Add todo" />
      </form>

      <h4>Todo List</h4>
      <ul>
        {todoList.map((listItem) => {
          return (
            <li key={listItem.id}>
              <p>{listItem.user}</p>
              <p>{listItem.title}</p>
              <p>{listItem.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
