import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/errors/404";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar
        items={10}
        avatar="https://www.brand-her.com/wp-content/uploads/2014/02/team1.jpg"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
