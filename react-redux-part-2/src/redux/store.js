import { configureStore } from "@reduxjs/toolkit";

import todo from "./todo.slice";
import counter from "./counter.slice";

const store = configureStore({
  reducer: {
    todo: todo,
    counter: counter,
  },
});

export default store;
