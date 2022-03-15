import Avatar from "../avatar/Avatar";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

function Navbar(props) {
  const { items, avatar } = props;

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
          <span className={styles.items}>{items}</span>
        </div>
        <div className={styles.avatar}>
          <Avatar url={avatar} />
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  items: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Navbar;
