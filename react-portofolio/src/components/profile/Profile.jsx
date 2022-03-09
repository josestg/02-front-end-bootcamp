import Avatar from "../avatar/Avatar";
import styles from "./Profile.module.css";

function Profile(props) {
  const { url, name, job, bio } = props.user;

  return (
    <div className={styles.container}>
      <Avatar url={url} />
      <div className={styles.content}>
        <h1>{name}</h1>
        <h4>{job}</h4>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}

export default Profile;
