import { useEffect, useState } from "react";

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
      const obj = JSON.parse(storage);
      setTodoList(obj);
    }
  }, []);

  const handleTypingOnTitleInput = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleTypingOnDescriptionInput = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleTypingOnUserInput = (event) => {
    const value = event.target.value;
    setUser(value);
  };

  const handleAddTodoList = (event) => {
    event.preventDefault();
    const newTodo = {
      id: todoList.length + 1,
      title: title,
      description: description,
      user: user,
    };

    // DONT. karna tidak boleh melakukan mutasi langsung ke state.
    // todoList.push(newTodo);

    // Kita membuat duplikat dari state yang memiliki isi yang sama persis.
    const copyArray = [];
    todoList.forEach((eachValue) => {
      // Ternyata: eachValue adalag sebuah object,
      // karna dia adalah sebuah object sudah pasti itu menggunakan
      // pass by reference.
      // Oleh karena itu kita juga harus membuat duplikat dari si eachValue.
      //
      // Ini sebagai landasan teman-teman memahami pass-by-refrence,
      // immutable data structure, shallow and deep copy.
      // Nantinya ketika sudah terbiasa kita akan mempertimbangkan menggunkan
      // library: https://immerjs.github.io/immer.

      const copyEachValue = Object.assign({}, eachValue);
      copyArray.push(copyEachValue);
    });

    // BOLEH. karna yang kita mutasi saat ini adalah duplikat dari state. Bukan state-nya.
    copyArray.push(newTodo);

    // Kita update state menjadi copyArray.
    setTodoList(copyArray);

    // simpan ke localStorage.

    localStorage.setItem("todoList", JSON.stringify(copyArray));
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
          onChange={(event) => handleTypingOnTitleInput(event)}
        />
        <br />
        <label>Desc</label>
        <br />
        <textarea
          type="text"
          placeholder="type your todo description"
          onChange={(event) => handleTypingOnDescriptionInput(event)}
        />
        <br />
        <label>User</label>
        <br />
        <input
          type="text"
          placeholder="type your todo user"
          onChange={(event) => handleTypingOnUserInput(event)}
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
