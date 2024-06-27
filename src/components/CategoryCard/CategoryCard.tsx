import { Link } from "react-router-dom";
import { Category } from "../../types";
import styles from "./CategoryCard.module.css";

interface CategoryCardProp {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProp) => {
  return (
    <Link className={styles.categoryCard} to={`products/${category.id}`}>
      <img src={category.picUrl} alt={category.name} className={styles.image} />
      <div className={styles.content}>
        <p>{category.name}</p>
        <button>Shop Now</button>
      </div>
    </Link>
  );
  return;
};

export default CategoryCard;
