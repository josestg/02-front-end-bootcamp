import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/home/Home";
import NotFound from "./pages/errors/404";
import Navbar from "./components/navbar/Navbar";
import Checkout from "./pages/checkout/Checkout";
import { useFetch } from "./hooks/fetcher";
import { fetchAllProducts } from "./api/product.api";
import { useDispatch } from "react-redux";
import { initProducts } from "./redux/action";

function App() {
  const { loading, error, state: products } = useFetch(fetchAllProducts, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = initProducts(products);
    dispatch(action);
  }, [products]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  // view
  return (
    <>
      <Navbar avatar="https://www.brand-her.com/wp-content/uploads/2014/02/team1.jpg" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
