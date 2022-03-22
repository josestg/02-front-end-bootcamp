import { createContext, useReducer } from "react";

export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const RESET = "reset";
export const INCREMENT_BY_N = "ncrement-by-n";

const initialState = { count: 0 };

export const CounterContext = createContext({
  state: initialState,
  dispatch: (state, action) => state,
});

// const initialState = { count: 0 };
export const initializer = (arg) => {
  return { count: arg.count };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case INCREMENT_BY_N:
      return { count: state.count + action.payload };
    case RESET:
      return initializer(initialState);
    default:
      throw new Error("unknown action.type");
  }
};

const CounterProvider = (props) => {
  const initialCount = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initialCount, initializer);

  const value = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
