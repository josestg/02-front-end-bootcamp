import PropTypes from "prop-types";
import ProductCard from "../../components/product/Product";
import Search from "../../components/search/Search";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

import * as productAPI from "../../api/product.api";
import * as searchHelper from "../../helpers/search.helper";
import { useFetch } from "../../hooks/fetcher";

function Home(props) {
  // filtered ini yang akan kita tampilkan di browser.
  // Pada saat kondisi awal, filtered akan sama dengan original.
  // Tetapi jika terjadi perubahan keyword maka isi filtered
  // akan berbeda dengan yang original.
  const [filtered, setFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  const { onBuy } = props;

  const {
    state: products,
    loading,
    error,
  } = useFetch(productAPI.fetchAllProducts, []);

  // karena kita akan call api.
  // maka kita butuh fase componentDidMount.
  useEffect(() => {
    setFiltered(products);
  }, [products]);

  useEffect(() => {
    if (keyword.length > 0) {
      const filtered = searchHelper.search(products, keyword);
      setFiltered(filtered);
    } else {
      // apabila keywordnya kosong kita kembalikan ke isi original.
      setFiltered(products);
    }
  }, [keyword]);

  const handleSearch = (updates) => {
    setKeyword(updates);
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Search keyword={keyword} onSearch={handleSearch} />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.products}>
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              onBuy={onBuy}
            />
          ))}
        </div>
      )}
    </div>
  );
}

Home.propTypes = {
  onBuy: PropTypes.func.isRequired,
};

export default Home;
