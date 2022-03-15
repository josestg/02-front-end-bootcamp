import styles from "./Search.module.css";

import PropsTypes from "prop-types";

function Search(props) {
  const { keyword, onSearch } = props;

  return (
    <div className={styles.container}>
      <div id={styles.content}>
        <input
          type="text"
          name="input"
          placeholder="Search by title..."
          className={(styles.input, styles.square)}
          id="search-input"
          value={keyword}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

Search.propTypes = {
  keyword: PropsTypes.string.isRequired,
  onSearch: PropsTypes.func.isRequired,
};

export default Search;
