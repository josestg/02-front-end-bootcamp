import styles from "./Product.module.css";
import PropTypes from "prop-types";

function ProductCard(props) {
  const { title, image, price } = props;

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p>${price}</p>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
