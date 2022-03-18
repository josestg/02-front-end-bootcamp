import produce from "immer";
import { createContext, useEffect, useState } from "react";
import {
  createTodo,
  deleteTodo,
  retrieveTodos,
  updateTodo,
} from "../api/todos.api";

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
    retrieveTodos()
      .then((data) => setTodos(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const addTodo = async (title) => {
    const createdTodo = await createTodo({
      title: title,
      completed: false,
    });

    const nextTodos = produce(todos, (drafTodo) => {
      drafTodo.push(createdTodo);
    });

    setTodos(nextTodos);
  };

  const delTodo = async (id) => {
    await deleteTodo(id);

    const nextTodos = produce(todos, (drafTodo) => {
      const index = drafTodo.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        drafTodo.splice(index, 1);
      }
    });

    setTodos(nextTodos);
  };

  const updateCompleteStatus = async (id, completed) => {
    await updateTodo(id, completed);

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
