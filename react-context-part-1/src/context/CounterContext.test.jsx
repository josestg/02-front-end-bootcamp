import {
  DECREMENT,
  INCREMENT,
  INCREMENT_BY_N,
  reducer,
  RESET,
} from "./CounterContext";

test("given state = {count: 0} and action INCREMENT, expect new state {count: 1}", () => {
  const state = { count: 0 };
  const action = { type: INCREMENT };
  const newState = reducer(state, action);

  expect(state).toEqual({ count: 0 });
  expect(newState).toEqual({ count: 1 });
  expect(newState).not.toBe(state);
});

test("given state = {count: 10} and action DECREMENT, expect new state {count: 9}", () => {
  const state = { count: 10 };
  const action = { type: DECREMENT };
  const newState = reducer(state, action);

  expect(state).toEqual({ count: 10 });
  expect(newState).toEqual({ count: 9 });
  expect(newState).not.toBe(state);
});

test("given state = {count: 10} and action INCREMENT_BY_N = 5, expect new state {count: 15}", () => {
  const state = { count: 10 };
  const action = { type: INCREMENT_BY_N, payload: 5 };
  const newState = reducer(state, action);

  expect(state).toEqual({ count: 10 });
  expect(newState).toEqual({ count: 15 });
  expect(newState).not.toBe(state);
});

test("given state = {count: 10} and action RESET, expect new state {count: 0}", () => {
  const state = { count: 10 };
  const action = { type: RESET };
  const newState = reducer(state, action);

  expect(state).toEqual({ count: 10 });
  expect(newState).toEqual({ count: 0 });
  expect(newState).not.toBe(state);
});

test("given unknown action type, expect an error", () => {
  const state = { count: 10 };
  const action = { type: "ABC" };

  expect(() => reducer(state, action)).toThrowError("unknown action.type");
  expect(state).toEqual({ count: 10 });
});
