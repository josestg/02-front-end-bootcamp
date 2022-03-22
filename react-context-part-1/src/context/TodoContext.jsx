import produce from "immer";
import { createContext, useEffect, useReducer, useState } from "react";
import {
  createTodo,
  deleteTodo,
  retrieveTodos,
  updateTodo,
} from "../api/todos.api";

const initialValue = {
  state: {
    loading: true,
    error: null,
    todos: [],
  },
  addTodo: (title) => {},
  delTodo: (id) => {},
  updateCompleteStatus: (id, completed) => {},
};

export const SET_TODO = "set_todo";
export const ADD_TODO = "add_todo";
export const DEL_TODO = "del_todo";
export const UPT_TODO = "upt_todo";
export const SET_ERROR = "set_error";
export const START_LOADING = "start_loading";
export const STOP_LOADING = "stop_loading";

const initialState = {
  todos: [],
  loading: true,
  error: null,
};

/**
 * Ini hanya comment untuk membuat tipe data. Tidak ada pengaruhnya ke logika application.
 * @param {{todos: Array<{id: number, title: string, completed: boolean}>}} state
 * @param {{type: SET_TODO | ADD_TODO | DEL_TODO | UPT_TODO |SET_ERROR |START_LOADING |STOP_LOADING, payload: { id?:number, error?: Error, loading?: boolean, todos?: Array<{id: number, title: string, completed: boolean}>}}} action
 * @returns {{todos: Array<{id: number, title: string, completed: boolean}>}}
 */
export const reducer = (state = initialState, action) => {
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

  useEffect(() => {
    dispatch({ type: START_LOADING });
    retrieveTodos()
      .then((todos) => dispatch({ type: SET_TODO, payload: { todos } }))
      .catch((error) => dispatch({ type: SET_ERROR, payload: { error } }))
      .finally(() => dispatch({ type: STOP_LOADING }));
  }, []);

  const addTodo = (title) =>
    createTodo({ title, completed: false })
      .then((todos) => dispatch({ type: ADD_TODO, payload: { todos } }))
      .catch((error) => dispatch({ type: SET_ERROR, payload: { error } }));

  const delTodo = (id) =>
    deleteTodo(id)
      .then(() => dispatch({ type: DEL_TODO, payload: { id } }))
      .catch((error) => dispatch({ type: SET_ERROR, payload: { error } }));

  const updateCompleteStatus = (id, completed) =>
    updateTodo(id, completed)
      .then(() => dispatch({ type: UPT_TODO, payload: { id, completed } }))
      .catch((error) => dispatch({ type: SET_ERROR, payload: { error } }));

  const value = {
    state,
    addTodo,
    delTodo,
    updateCompleteStatus,
  };

  return (
    <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>
  );
};

export default TodoProvider;
