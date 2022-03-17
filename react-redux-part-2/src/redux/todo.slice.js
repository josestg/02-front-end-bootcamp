import { createSlice } from "@reduxjs/toolkit";

const todoInitialState = {
  loading: false,
  error: null,
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: todoInitialState,
  reducers: {
    initTodo: (state, action) => {
      const { payload } = action;
      state.todos = payload.todos;
    },
    setLoading: (state, action) => {
      const { payload } = action;
      state.loading = payload.loading;
    },
    setError: (state, action) => {
      const { payload } = action;
      state.error = payload.error;
    },
    addTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      const { payload } = action;

      state.todos.push({
        id: state.length + 1,
        title: payload.title,
        completed: false,
      });
    },

    markAsCompleted: (state, action) => {
      const { payload } = action;
      const target = state.todos.find((todo) => todo.id === payload.id);
      if (target !== undefined && target.completed === false) {
        target.completed = true;
      }
    },
    markAsInprogres: (state, action) => {
      const { payload } = action;
      const target = state.todos.find((todo) => todo.id === payload.id);
      if (target !== undefined && target.completed === true) {
        target.completed = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  markAsCompleted,
  markAsInprogres,
  initTodo,
  setError,
  setLoading,
} = todoSlice.actions;

export function fetchTodosAPI() {
  return async (dispatch, _) => {
    dispatch(setLoading({ loading: true }));

    try {
      const response = await fetch("http://localhost:4000/todos", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });

      const data = await response.json();
      dispatch(initTodo({ todos: data }));
    } catch (error) {
      dispatch(setError({ error: error }));
    } finally {
      dispatch(setLoading({ loading: false }));
    }
  };
}

export default todoSlice.reducer;
