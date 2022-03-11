import Navbar from "./components/navbar/Navbar";
import ProductCard from "./components/product/Product";
import Search from "./components/search/Search";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Navbar />

      <Search />

      <div className={styles.products}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
