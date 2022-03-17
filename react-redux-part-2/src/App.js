import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
