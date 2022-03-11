import styles from "./Product.module.css";

function ProductCard(props) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product image"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.title}>
          <h1>Fjallraven - Foldsack No. 1 Backpack</h1>
          <p>$109.95</p>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
