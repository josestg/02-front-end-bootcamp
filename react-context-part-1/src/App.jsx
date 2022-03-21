import Counter from "./components/Counter";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import Toolbar from "./components/Toolbar";
import CounterProvider from "./context/CounterContext";
import ThemeProvider from "./context/ThemeContext";
import TodoProvider from "./context/TodoContext";

function App() {
  return (
    <ThemeProvider>
      <CounterProvider>
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
      </CounterProvider>
    </ThemeProvider>
  );
}

export default App;
