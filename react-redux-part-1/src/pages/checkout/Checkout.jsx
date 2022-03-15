import { useFetch } from "../../hooks/fetcher";
import styles from "./Checkout.module.css";

import { takeNProducts } from "../../api/product.api";
import ProductCart from "../../components/product-cart/ProductCart";

function Checkout() {
  const { state: products, error, loading } = useFetch(takeNProducts, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h3>Sub Total: $100</h3>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCart
            key={product.id}
            id={product.id}
            price={product.price}
            title={product.title}
            image={product.image}
            count={1} // hard code.
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
