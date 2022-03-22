import {
  ADD_TODO,
  DEL_TODO,
  reducer,
  SET_ERROR,
  SET_TODO,
  START_LOADING,
  STOP_LOADING,
  UPT_TODO,
} from "./TodoContext";

test("given state = {loading: false, error: null, todos: []} and action START_LOADING, expect new state{loading: true, error: null, todos: []}", () => {
  // TODO:
  const state = { loading: false, error: null, todos: [] };
  const action = { type: START_LOADING };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: false, error: null, todos: [] });
  expect(newState).toEqual({ loading: true, error: null, todos: [] });
  expect(newState).not.toBe(state);
});

test("given state = {loading: true, error: null, todos: []} and action STOP_LOADING, expect new state{loading: false, error: null, todos: []}", () => {
  // TODO:
  const state = { loading: true, error: null, todos: [] };
  const action = { type: STOP_LOADING };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: true, error: null, todos: [] });
  expect(newState).toEqual({ loading: false, error: null, todos: [] });
  expect(newState).not.toBe(state);
});

test("given state = {loading: false, error: null, todos: []} and action SET_ERROR, expect new state{loading: false, error: <not null>, todos: []}", () => {
  // TODO:
  const state = { loading: false, error: null, todos: [] };
  const action = { type: SET_ERROR, payload: { error: "newError" } };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: false, error: null, todos: [] });
  expect(newState).toEqual({ loading: false, error: "newError", todos: [] });
  expect(newState).not.toBe(state);
});

test("given state = {loading: false, error: null, todos: []} and action SET_TODO, expect new state{loading: false, error: null, todos: payload.todos}", () => {
  // TODO:
  const todos = [{ id: 1, title: "todo", completed: true }];
  const state = { loading: false, error: null, todos: [] };
  const action = { type: SET_TODO, payload: { todos: todos } };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: false, error: null, todos: [] });
  expect(newState).toEqual({ loading: false, error: null, todos: todos });
  expect(newState).not.toBe(state);
});

test("given state = {loading: false, error: null, todos: [{id: 1, title: 'todo1', completed: false}]} and action ADD_TODO, expect new state{loading: false, error: null, todos: prev_todos + added_todos}", () => {
  // TODO:
  const initialTodos = [{ id: 1, title: "todo 1", completed: false }];

  const newTodo = { id: 2, title: "Todo 2", completed: true };

  const expectedAddResult = [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
  ];

  const state = { loading: false, error: null, todos: initialTodos };

  const action = { type: ADD_TODO, payload: { todos: newTodo } };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: false, error: null, todos: initialTodos });
  expect(newState).toEqual({
    loading: false,
    error: null,
    todos: expectedAddResult,
  });
  expect(newState).not.toBe(state);
});

test("given state = {loading: false, error: null, todos: [{id: 1, title: 'todo1', completed: false}]} and action DEL_TODO, expect new state{loading: false, error: null, todos: prev_todos - deleted}", () => {
  // TODO:
  const expectedAddResult = [{ id: 1, title: "todo 1", completed: false }];

  const targetDeleteID = 2;

  const initialTodos = [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
  ];

  const state = { loading: false, error: null, todos: initialTodos };

  const action = { type: DEL_TODO, payload: { id: targetDeleteID } };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: false, error: null, todos: initialTodos });
  expect(newState).toEqual({
    loading: false,
    error: null,
    todos: expectedAddResult,
  });
  expect(newState).not.toBe(state);
});

test("given state = {loading: false, error: null, todos: [{id: 1, title: 'todo1', completed: false}]} and action ADD_TODO, expect new state{loading: false, error: null, todos: prev_todos + added_todos}", () => {
  // TODO:
  const initialTodos = [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
  ];

  const updates = { id: 2, completed: false };

  const expectedAddResult = [
    { id: 1, title: "todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: false },
  ];

  const state = { loading: false, error: null, todos: initialTodos };

  const action = {
    type: UPT_TODO,
    payload: { id: updates.id, completed: updates.completed },
  };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: false, error: null, todos: initialTodos });
  expect(newState).toEqual({
    loading: false,
    error: null,
    todos: expectedAddResult,
  });
  expect(newState).not.toBe(state);
});

test("given unknown action type, expect an error", () => {
  const state = { loading: false, error: null, todos: [] };
  const action = { type: "SEMBARANG" };

  expect(() => reducer(state, action)).toThrowError("unknown action.type");
  expect(state).toEqual({ loading: false, error: null, todos: [] });
});
