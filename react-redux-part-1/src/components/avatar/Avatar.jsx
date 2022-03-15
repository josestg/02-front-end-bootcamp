import styles from "./Avatar.module.css";
import PropTypes from "prop-types";

function Avatar(props) {
  const url = props.url;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={url} alt="user profile" />
    </div>
  );
}

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Avatar;
