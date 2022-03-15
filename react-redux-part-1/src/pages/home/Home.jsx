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

  // contoh: [{id: 1, count: 2}, {id: 2, count: 1}, {id: 3, count: 1}]
  const [bucket, setBucket] = useState([]);

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

  const handleBuy = (id) => {
    // 1. buat copy dari bucket, sehingga kita aman untuk melakukan mutasi langsung.
    // TODO: menggunakan immerjs
    const copyBucket = searchHelper.deepCopyArrayOfObject(bucket);

    // 2. kita cek apakah id tersebut sudah ada di bucket.
    const found = copyBucket.find((item) => item.id === id);
    // 3. apabila sudah ada kita tinggal menaikkan jumlah count = count + 1.
    if (found !== undefined) {
      found.count = found.count + 1;
    } else {
      // 4. jika tidak, maka kita tambahkan id tersebut kedalam bucket dengan count awal adalah 1.
      copyBucket.push({
        id: id,
        count: 1,
      });
    }

    // 5. Update state bucket menjadi copyBucket yang sudah dimutasi.
    setBucket(copyBucket);
  };

  console.log("BUCKET", bucket);

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
              onBuy={handleBuy}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
