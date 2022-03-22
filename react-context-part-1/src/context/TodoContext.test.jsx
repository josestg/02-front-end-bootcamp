import { reducer, SET_ERROR, START_LOADING, STOP_LOADING } from './TodoContext';

test('given state = {loading: false, error: null, todos: []} and action START_LOADING, expect new state{loading: true, error: null, todos: []}', () => {
  // TODO:
  const state = { loading: false, error: null, todos: [] };
  const action = { type: START_LOADING };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: false, error: null, todos: [] });
  expect(newState).toEqual({ loading: true, error: null, todos: [] });
  expect(newState).not.toBe(state);
});

test('given state = {loading: true, error: null, todos: []} and action STOP_LOADING, expect new state{loading: false, error: null, todos: []}', () => {
  // TODO:
  const state = { loading: true, error: null, todos: [] };
  const action = { type: STOP_LOADING };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: true, error: null, todos: [] });
  expect(newState).toEqual({ loading: false, error: null, todos: [] });
  expect(newState).not.toBe(state);
});

test('given state = {loading: false, error: null, todos: []} and action SET_ERROR, expect new state{loading: false, error: <not null>, todos: []}', () => {
  // TODO:
  const state = { loading: false, error: null, todos: [] };
  const action = { type: SET_ERROR, payload: { error: 'newError' } };
  const newState = reducer(state, action);

  expect(state).toEqual({ loading: false, error: null, todos: [] });
  expect(newState).toEqual({ loading: false, error: 'newError', todos: [] });
  expect(newState).not.toBe(state);
});
