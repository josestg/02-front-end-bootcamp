import produce from "immer";
import { createContext, useEffect, useReducer, useState } from "react";
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

const SET_TODO = "set_todo";
const ADD_TODO = "add_todo";
const DEL_TODO = "del_todo";
const UPT_TODO = "upt_todo";
const SET_ERROR = "set_error";
const START_LOADING = "start_loading";
const STOP_LOADING = "stop_loading";

const initialState = {
  todos: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, (draf) => {
        draf.todos.push(action.payload.todos);
      });
    case DEL_TODO:
      return produce(state, (draf) => {
        const index = draf.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          draf.todos.splice(index, 1);
        }
      });
    case UPT_TODO:
      return produce(state, (draf) => {
        const index = draf.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        if (index !== -1) {
          draf.todos[index].completed = action.payload.completed;
        }
      });
    case SET_TODO:
      return { ...state, todos: action.payload.todos };
    case START_LOADING:
      return { ...state, loading: true };
    case STOP_LOADING:
      return { ...state, loading: false };
    case SET_ERROR:
      return { ...state, error: action.payload.error };
    default:
      throw new Error("unknown action.type");
  }
};

export const TodoContext = createContext(initialValue);

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { loading, error, todos } = state;

  useEffect(() => {
    dispatch({ type: START_LOADING });
    retrieveTodos()
      .then((data) => dispatch({ type: SET_TODO, payload: { todos: data } }))
      .catch((error) =>
        dispatch({ type: SET_ERROR, payload: { error: error } })
      )
      .finally(() => dispatch({ type: STOP_LOADING }));
  }, []);

  const addTodo = async (title) => {
    const createdTodo = await createTodo({
      title: title,
      completed: false,
    });

    dispatch({ type: ADD_TODO, payload: { todos: createdTodo } });
  };

  const delTodo = async (id) => {
    await deleteTodo(id);
    dispatch({ type: DEL_TODO, payload: { id: id } });
  };

  const updateCompleteStatus = async (id, completed) => {
    await updateTodo(id, completed);
    dispatch({ type: UPT_TODO, payload: { id: id, completed: completed } });
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
