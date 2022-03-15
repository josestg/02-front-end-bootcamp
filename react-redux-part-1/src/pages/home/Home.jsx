import Navbar from "../../components/navbar/Navbar";
import ProductCard from "../../components/product/Product";
import Search from "../../components/search/Search";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

import * as productAPI from "../../api/product.api";
import * as searchHelper from "../../helpers/search.helper";
import { useFetch } from "../../hooks/fetcher";

function Home() {
  // filtered ini yang akan kita tampilkan di browser.
  // Pada saat kondisi awal, filtered akan sama dengan original.
  // Tetapi jika terjadi perubahan keyword maka isi filtered
  // akan berbeda dengan yang original.
  const [filtered, setFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

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
      <Navbar
        items={10}
        avatar="https://www.brand-her.com/wp-content/uploads/2014/02/team1.jpg"
      />
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
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
