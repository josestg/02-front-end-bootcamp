const { useReducer } = require("react");

// const initialState = { count: 0 };
const initializer = (arg) => {
  return { count: arg.n };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "increment-by-n":
      return { count: state.count + action.payload };
    case "reset":
      return initializer(action.payload);
    default:
      throw new Error("unknow action.type");
  }
};

const Counter = () => {
  const initialCount = { n: 0 };

  const [state, dispatch] = useReducer(reducer, initialCount, initializer);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: "reset", payload: initialCount })}
        >
          reset
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
          inrement
        </button>
        <button
          onClick={() => dispatch({ type: "increment-by-n", payload: 5 })}
        >
          inrement by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
