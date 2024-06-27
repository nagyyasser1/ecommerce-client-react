import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types";
import styles from "./ProductList.module.css";

interface ProductListProp {
  products: Product[];
}

const ProductList = ({ products }: ProductListProp) => {
  return (
    <div className={styles.productList}>
      {products?.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
