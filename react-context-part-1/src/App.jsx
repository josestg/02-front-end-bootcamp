import Counter from "./components/Counter";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import Toolbar from "./components/Toolbar";
import ThemeProvider from "./context/ThemeContext";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          padding: "30px",
        }}
      >
        <Toolbar />
        <Counter />
        <TodoProvider>
          <InputTodo />
          <TodoList />
        </TodoProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
