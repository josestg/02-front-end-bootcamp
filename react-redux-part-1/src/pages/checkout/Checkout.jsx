import { useFetch } from "../../hooks/fetcher";
import styles from "./Checkout.module.css";

import { takeNProducts } from "../../api/product.api";
import ProductCard from "../../components/product/Product";

function Checkout() {
  const { state: products, error, loading } = useFetch(takeNProducts, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          price={product.price}
          title={product.title}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Checkout;
