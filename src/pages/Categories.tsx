import { CategoryList } from "../components";
import { Category } from "../types";
import styles from "./styles/Categories.module.css";

const categories: Category[] = [
  {
    id: "1",
    name: "MAN",
    picUrl:
      "https://i.pinimg.com/736x/39/07/c4/3907c41616c1bdec6a582573b1915b86.jpg",
  },
  {
    id: "2",
    name: "WOMEN",
    picUrl:
      "https://ae01.alicdn.com/kf/S02cfeee5a3864bdaaaa9fcc454daff55V/New-Muslim-Unisex-Veil-Fashion-Ramadan-High-Quality-Tie-Back-Headcover-Women-Headwrap-Solid-Color-Soft.jpg",
  },
  {
    id: "3",
    name: "KIDS",
    picUrl:
      "https://img01.ztat.net/cnt/contentful-apps/uploads/30a3b138-67aa-48a8-b33f-6535afdbdaf4.jpeg?imwidth=640",
  },
];

const Categories = () => {
  return (
    <div className={styles.categories}>
      <div className={styles.categories_header}>
        <p>Our Categories</p>
        <span>
          Our latest collection, where classic and contemporary styles converge
          <br />
          in perfect harmony
        </span>
      </div>
      <div className={styles.content}>
        <CategoryList categories={categories} />
      </div>
    </div>
  );
};

export default Categories;
