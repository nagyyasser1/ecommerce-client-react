import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import styles from "./Sidebar.module.css";

type Category = {
  id: string;
  name: string;
};

interface SidebarPropType {
  categories: Category[];
  menuOpend: boolean;
  handleMenuToggle: () => void;
}

const Sidebar = ({
  categories,
  menuOpend,
  handleMenuToggle,
}: SidebarPropType) => {
  return (
    <aside className={`${styles.aside} ${menuOpend && styles.aside_open}`}>
      <div className={styles.content}>
        <div className={styles.closeIcon_container}>
          <MdClose onClick={handleMenuToggle} className={styles.closeIcon} />
        </div>
        <ul className={styles.categories}>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`categories/${category.id}`} className={styles.link}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
