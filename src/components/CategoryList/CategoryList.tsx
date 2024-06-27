import { Category } from "../../types";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./CategoryList.module.css";

interface CategoryListProp {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProp) => {
  return (
    <div className={styles.categoryList}>
      {categories?.map((category, index) => (
        <CategoryCard category={category} key={index} />
      ))}
    </div>
  );
};

export default CategoryList;
