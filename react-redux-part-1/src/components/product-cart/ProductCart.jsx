import styles from "./ProductCart.module.css";
import PropTypes from "prop-types";

function ProductCart(props) {
  const { id, title, image, price, count, onBuy, onRemove } = props;

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
          <button onClick={() => onBuy(id)}>+</button>
          <button onClick={() => onRemove(id)}>-</button>
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
  onBuy: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ProductCart;
