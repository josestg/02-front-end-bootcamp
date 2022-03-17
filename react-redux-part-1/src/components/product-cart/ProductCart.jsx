import styles from "./ProductCart.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProductCartAPI, delProductCartAPI } from "../../redux/action";

function ProductCart(props) {
  const { id, title, image, price, count } = props;

  const dispatch = useDispatch();

  const handleBuy = (id) => {
    const action = addProductCartAPI(id);
    dispatch(action);
  };

  const handleRemove = (id) => {
    const action = delProductCartAPI(id);
    dispatch(action);
  };

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>${price}</p>
        </div>
      </div>
      <div className={styles.action}>
        <strong>Items: {count}</strong>
        <div>
          <button onClick={() => handleBuy(id)}>+</button>
          <button onClick={() => handleRemove(id)}>-</button>
        </div>
      </div>
    </div>
  );
}

ProductCart.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default ProductCart;
