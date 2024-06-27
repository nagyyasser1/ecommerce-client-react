import { ProductList } from "../components";
import { Product } from "../types";
import styles from "./styles/NewCollection.module.css";

const products: Product[] = [
  {
    id: "1",
    name: "t-shirt",
    slug: "t-shirt-product",
    description: "description",
    short_description: "short_description",
    price: 444,
    old_price: 555,
    category: {
      id: "44",
      name: "kids",
      picUrl: "",
    },
    tags: ["dd"],
    images: [
      "https://static.zara.net/assets/public/85fd/909d/8ae24329aee2/1f0c0f09dbd2/01887450250-a1/01887450250-a1.jpg?ts=1705564337541&w=824",
      "",
    ],
    page_title: "",
    meta_description: "",
  },
  {
    id: "2",
    name: "t-shirt",
    slug: "t-shirt-product",
    description: "description",
    short_description: "short_description",
    price: 444,
    old_price: 555,
    category: {
      id: "44",
      name: "kids",
      picUrl: "",
    },
    tags: ["dd"],
    images: [
      "https://static.zara.net/assets/public/85fd/909d/8ae24329aee2/1f0c0f09dbd2/01887450250-a1/01887450250-a1.jpg?ts=1705564337541&w=824",
      "",
    ],
    page_title: "",
    meta_description: "",
  },
  {
    id: "3",
    name: "t-shirt",
    slug: "t-shirt-product",
    description: "description",
    short_description: "short_description",
    price: 444,
    old_price: 555,
    category: {
      id: "44",
      name: "kids",
      picUrl: "",
    },
    tags: ["dd"],
    images: [
      "https://static.zara.net/assets/public/85fd/909d/8ae24329aee2/1f0c0f09dbd2/01887450250-a1/01887450250-a1.jpg?ts=1705564337541&w=824",
      "",
    ],
    page_title: "",
    meta_description: "",
  },
  {
    id: "4",
    name: "t-shirt",
    slug: "t-shirt-product",
    description: "description",
    short_description: "short_description",
    price: 444,
    old_price: 555,
    category: {
      id: "44",
      name: "kids",
      picUrl: "",
    },
    tags: ["dd"],
    images: [
      "https://static.zara.net/assets/public/85fd/909d/8ae24329aee2/1f0c0f09dbd2/01887450250-a1/01887450250-a1.jpg?ts=1705564337541&w=824",
      "",
    ],
    page_title: "",
    meta_description: "",
  },
];

const NewCollection = () => {
  return (
    <div className={styles.newCollection}>
      <div className={styles.newCollection_header}>
        <p>NEW COLLECTION</p>
        <span>
          Our latest collection, where classic and contemporary styles converge
          <br />
          in perfect harmony
        </span>
      </div>
      <div className={styles.content}>
        <ProductList products={products} />
      </div>
      <div className={styles.footer}>
        <button>See Details {`>`}</button>
      </div>
    </div>
  );
};

export default NewCollection;
