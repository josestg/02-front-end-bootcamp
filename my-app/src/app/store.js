import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productReduer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReduer,
  },
});
