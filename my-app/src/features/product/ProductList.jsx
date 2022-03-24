import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../api/store.api";
import { init, setError, startLoading, stopLoading } from "./productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(startLoading());

    getProductList()
      .then((data) => dispatch(init(data)))
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(stopLoading()));

    // fetch("https://fakestoreapi.com/products", { method: "GET" })
    //   .then((response) => response.json())
    //   .then((products) => {
    //     const mapped = products.map((e) => {
    //       return {
    //         id: e.id,
    //         title: e.title,
    //         price: e.price,
    //       };
    //     });
    //     dispatch(init(mapped));
    //   })
    //   .catch((error) => dispatch(setError(error)))
    //   .finally(() => {
    //     dispatch(stopLoading());
    //   });
  }, [dispatch]);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.title} - {p.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
