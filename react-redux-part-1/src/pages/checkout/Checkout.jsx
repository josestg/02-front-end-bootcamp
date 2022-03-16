import styles from "./Checkout.module.css";

import ProductCart from "../../components/product-cart/ProductCart";
import { useSelector } from "react-redux";

function Checkout() {
  const cart = useSelector((state) => state.cartProducts);
  const products = useSelector((state) => state.products);

  const productsInCart = cart.map((item) => {
    const found = products.find((product) => product.id === item.id);
    return {
      ...found,
      selectedCount: item.count,
    };
  });

  const subTotal = productsInCart.reduce((acc, cur) => {
    const { selectedCount, price } = cur;
    const totalPriceEachProduct = selectedCount * price;
    return acc + totalPriceEachProduct;
  }, 0);

  return (
    <div>
      <h3>Sub Total: ${subTotal.toFixed(2)}</h3>
      <div className={styles.products}>
        {productsInCart.map((product) => {
          return (
            <ProductCart
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              count={product.selectedCount}
            />
          );
        })}
      </div>
    </div>
  );
}

Checkout.propTypes = {};

export default Checkout;
