import styles from "./Search.module.css";

function Search(props) {
  return (
    <div className={styles.container}>
      <form id={styles.content}>
        <input
          type="text"
          name="input"
          placeholder="Search by title..."
          class={(styles.input, styles.square)}
          id="search-input"
        />
      </form>
    </div>
  );
}

export default Search;
