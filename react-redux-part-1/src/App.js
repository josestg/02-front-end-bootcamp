import { Routes, Route } from "react-router-dom";

import { useCallback, useState } from "react";

import Home from "./pages/home/Home";
import NotFound from "./pages/errors/404";
import Navbar from "./components/navbar/Navbar";
import Checkout from "./pages/checkout/Checkout";
import * as helper from "./helpers/search.helper";

function App() {
  // contoh: [{id: 1, count: 2}, {id: 2, count: 1}, {id: 3, count: 1}]
  const [bucket, setBucket] = useState([]);

  const handleBuy = useCallback(
    (id) => {
      console.log("BUY CLICKED", id);
      // 1. buat copy dari bucket, sehingga kita aman untuk melakukan mutasi langsung.
      // TODO: menggunakan immerjs
      const copyBucket = helper.deepCopyArrayOfObject(bucket);

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
    },
    [bucket]
  );

  const handleRemove = (id) => {
    console.log("REMOVE CLICKED", id);
    // 1. buat copy dari bucket, sehingga kita aman untuk melakukan mutasi langsung.
    // TODO: menggunakan immerjs
    const copyBucket = helper.deepCopyArrayOfObject(bucket);

    // 2. kita cek apakah id tersebut sudah ada di bucket.
    const found = copyBucket.find((item) => item.id === id);
    // 3. apabila sudah ada kita tinggal menaikkan jumlah count = count + 1.
    if (found !== undefined) {
      found.count = found.count - 1;
    }

    // 5. Update state bucket menjadi copyBucket yang sudah dimutasi.
    setBucket(copyBucket.filter((e) => e.count > 0));
  };

  // view
  return (
    <>
      <Navbar
        items={bucket.length}
        avatar="https://www.brand-her.com/wp-content/uploads/2014/02/team1.jpg"
      />
      <Routes>
        <Route path="/" element={<Home onBuy={handleBuy} />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              bucket={bucket}
              onBuy={handleBuy}
              onRemove={handleRemove}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
