import React from "react";
import styles from "./ProductCard.module.css";
import { Product } from "../../types";
import { Link } from "react-router-dom";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Link className={styles.productCard} to={`products/${product.id}`}>
      <img
        src={product.images[0]}
        alt={product.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.shortDescription}>{product.short_description}</p>
        <div className={styles.priceSection}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          {product.old_price && (
            <span className={styles.oldPrice}>
              ${product.old_price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
