import ProductCard from "../../components/product/Product";
import Search from "../../components/search/Search";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

import * as searchHelper from "../../helpers/search.helper";
import { useSelector } from "react-redux";

function Home() {
  // filtered ini yang akan kita tampilkan di browser.
  // Pada saat kondisi awal, filtered akan sama dengan original.
  // Tetapi jika terjadi perubahan keyword maka isi filtered
  // akan berbeda dengan yang original.
  const [filtered, setFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  const products = useSelector((state) => state.products);

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

  return (
    <div>
      <Search keyword={keyword} onSearch={handleSearch} />
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
    </div>
  );
}

Home.propTypes = {};

export default Home;
