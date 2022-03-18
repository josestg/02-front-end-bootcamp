import produce from "immer";
import { createContext, useEffect, useState } from "react";

const initialValue = {
  loading: true,
  error: null,
  todos: [],
  addTodo: async (title) => {},
  delTodo: async (id) => {},
  updateCompleteStatus: async (id, completed) => {},
};

export const TodoContext = createContext(initialValue);

const TodoProvider = (props) => {
  const [loading, setLoading] = useState(initialValue.loading);
  const [error, setError] = useState(initialValue.error);
  const [todos, setTodos] = useState(initialValue.todos);

  useEffect(() => {
    fetch("http://localhost:4000/todos", {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const addTodo = async (title) => {
    const response = await fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        completed: false,
      }),
    });

    const createdTodo = await response.json();

    const nextTodos = produce(todos, (drafTodo) => {
      drafTodo.push(createdTodo);
    });

    setTodos(nextTodos);
  };

  const delTodo = async (id) => {
    const response = await fetch("http://localhost:4000/todos/" + id, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    await response.json();

    const nextTodos = produce(todos, (drafTodo) => {
      const index = drafTodo.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        drafTodo.splice(index, 1);
      }
    });

    setTodos(nextTodos);
  };

  const updateCompleteStatus = async (id, completed) => {
    const response = await fetch("http://localhost:4000/todos/" + id, {
      method: "PATCH",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        completed: completed,
      }),
    });

    await response.json();

    const nextTodos = produce(todos, (drafTodo) => {
      const index = drafTodo.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        drafTodo[index].completed = completed;
      }
    });

    setTodos(nextTodos);
  };

  const value = {
    loading: loading,
    error: error,
    todos: todos,
    addTodo: addTodo,
    delTodo: delTodo,
    updateCompleteStatus: updateCompleteStatus,
  };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export default TodoProvider;
