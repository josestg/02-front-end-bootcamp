import Avatar from "../avatar/Avatar";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Navbar(props) {
  const { avatar } = props;

  const cart = useSelector((state) => state.cartProducts);

  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Link to="/">
          <p>Store</p>
        </Link>
      </div>
      <div className={styles.user}>
        <div className={styles.cart}>
          <Link to="/checkout">
            <p>Cart</p>
          </Link>
          <span className={styles.items}>{cart.length}</span>
        </div>
        <div className={styles.avatar}>
          <Avatar url={avatar} />
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Navbar;
