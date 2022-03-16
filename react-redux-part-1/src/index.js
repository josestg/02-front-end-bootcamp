import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import store from "./redux/store";
import { addProductCart, delProductCart, initProducts } from "./redux/action";

store.subscribe(() => {
  const updatedState = store.getState();
  console.log(updatedState);
});

store.dispatch(
  initProducts([
    {
      id: 1,
      title: "product 1",
    },
  ])
);

store.dispatch(addProductCart(1));
store.dispatch(addProductCart(1));
store.dispatch(addProductCart(2));

store.dispatch(delProductCart(1));
store.dispatch(delProductCart(1));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
