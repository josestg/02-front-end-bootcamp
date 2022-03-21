import {
  CounterContext,
  INCREMENT,
  INCREMENT_BY_N,
  DECREMENT,
  RESET,
} from "../context/CounterContext";

const { useContext } = require("react");

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: RESET })}>reset</button>
        <button onClick={() => dispatch({ type: INCREMENT })}>inrement</button>
        <button onClick={() => dispatch({ type: INCREMENT_BY_N, payload: 5 })}>
          inrement by 5
        </button>
        <button onClick={() => dispatch({ type: DECREMENT })}>decrement</button>
      </div>
    </div>
  );
};

export default Counter;
