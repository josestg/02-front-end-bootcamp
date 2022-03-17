import styles from "./Product.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProductCartAPI } from "../../redux/action";

function ProductCard(props) {
  const { id, title, image, price } = props;

  const dispatch = useDispatch();

  const handleBuy = (id) => {
    const action = addProductCartAPI(id);
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
          <button onClick={() => handleBuy(id)}>Buy</button>
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
