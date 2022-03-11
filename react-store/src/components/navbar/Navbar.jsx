import Avatar from "../avatar/Avatar";
import styles from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <p>Store</p>
      </div>
      <div className={styles.user}>
        <div className={styles.cart}>
          <p>Cart </p>
          <span className={styles.items}>10+</span>
        </div>
        <div className={styles.avatar}>
          <Avatar url="https://www.brand-her.com/wp-content/uploads/2014/02/team1.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
