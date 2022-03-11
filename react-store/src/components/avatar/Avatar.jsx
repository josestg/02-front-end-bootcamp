import styles from "./Avatar.module.css";

function Avatar(props) {
  const url = props.url;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={url} alt="user profile" />
    </div>
  );
}

export default Avatar;
