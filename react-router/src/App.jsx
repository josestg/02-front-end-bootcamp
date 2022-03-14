import { Routes, Route } from "react-router-dom";
import Detail from "./Detail/Detail";
import Posts from "./Posts/Posts";
import Users from "./Users/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
