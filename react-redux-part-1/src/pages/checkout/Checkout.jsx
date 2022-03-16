import styles from "./Checkout.module.css";

import ProductCart from "../../components/product-cart/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { takeDiscont, unUseDiscont } from "../../redux/action";

function Checkout() {
  const cart = useSelector((state) => state.cartProducts);
  const products = useSelector((state) => state.products);
  const coupons = useSelector((state) => state.coupons);
  const appliedCoupons = useSelector((state) => state.usedCoupons);

  const dispatch = useDispatch();

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

  const subTotalAfterDiscont = appliedCoupons.reduce((acc, cur) => {
    const rate = cur.rate;
    const totalDiscont = acc * rate;
    return acc - totalDiscont;
  }, subTotal);

  const handleUseDiscont = (name, rate) => {
    const action = takeDiscont(name, rate);
    dispatch(action);
  };

  const handleUnusedDiscont = (name) => {
    const action = unUseDiscont(name);
    dispatch(action);
  };

  return (
    <div>
      <h3>Sub Total: ${subTotalAfterDiscont.toFixed(2)}</h3>

      <div>
        <h4>Coupons:</h4>
        <ul>
          {coupons.map((item) => (
            <li
              key={item.name}
              onClick={() => handleUseDiscont(item.name, item.rate)}
            >
              {item.name} {item.rate * 100}%
            </li>
          ))}
        </ul>

        <h4>Applied Coupons:</h4>
        <ul>
          {appliedCoupons.map((item) => (
            <li key={item.name} onClick={() => handleUnusedDiscont(item.name)}>
              {item.name} {item.rate * 100}%
            </li>
          ))}
        </ul>
      </div>

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
