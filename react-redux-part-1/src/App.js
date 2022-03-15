import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/errors/404";
import Navbar from "./components/navbar/Navbar";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <>
      <Navbar
        items={10}
        avatar="https://www.brand-her.com/wp-content/uploads/2014/02/team1.jpg"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
