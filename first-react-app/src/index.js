import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// 1. Kalau ada children kita menggunkan tag biasa. contoh: <App>ABC</App>
// 2. Kalau tidak ada children misal contoh: <App></App>, ini bisa kita singkat menggunakan self closing tag.
//    yaitu menjadi: <App/>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
