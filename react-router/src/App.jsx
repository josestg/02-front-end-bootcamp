import { Routes, Route } from "react-router-dom";
import Detail from "./Detail/Detail";
import NotFound from "./NotFound/NotFound";
import Posts from "./Posts/Posts";
import Users from "./Users/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
