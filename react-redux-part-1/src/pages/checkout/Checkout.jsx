import { useFetch } from "../../hooks/fetcher";
import styles from "./Checkout.module.css";
import PropTypes from "prop-types";

import { fetchProductByIDs } from "../../api/product.api";
import ProductCart from "../../components/product-cart/ProductCart";

function Checkout(props) {
  console.log("render");
  const { bucket, onBuy, onRemove } = props;

  const selectedIDs = bucket.map((item) => item.id);
  const fetcher = async () => {
    const products = await fetchProductByIDs(selectedIDs);
    return products.map((p) => {
      const { count } = bucket.find((item) => item.id === p.id);
      return {
        ...p,
        selectedCount: count,
      };
    });
  };

  const { state: products, error, loading } = useFetch(fetcher, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  const subTotal = products.reduce((acc, cur) => {
    const { selectedCount, price } = cur;
    const totalPriceEachProduct = selectedCount * price;
    return acc + totalPriceEachProduct;
  }, 0);

  return (
    <div>
      <h3>Sub Total: ${subTotal.toFixed(2)}</h3>
      <div className={styles.products}>
        {products.map((product) => {
          return (
            <ProductCart
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              count={product.selectedCount}
              onBuy={onBuy}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </div>
  );
}

Checkout.propTypes = {
  bucket: PropTypes.array.isRequired,
  onBuy: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Checkout;
