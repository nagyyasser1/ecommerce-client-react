import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import styles from "./Header.module.css";
import { IoBagOutline } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
const categories = [
  {
    id: "1",
    name: "Men",
  },
  {
    id: "2",
    name: "Women",
  },
  {
    id: "3",
    name: "Kids",
  },
  {
    id: "4",
    name: "New & Featured",
  },
];
const Header = () => {
  const [menuOpend, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <Link to="/category1" className={styles.link}>
            Men
          </Link>
          <Link to="/category2" className={styles.link}>
            Women
          </Link>
          <Link to="/category3" className={styles.link}>
            Kids
          </Link>
          <Link to="/category3" className={styles.link}>
            New & Featured
          </Link>
        </div>
        <div className={styles.center}>
          <RiMenuFill className={styles.menu_icon} onClick={handleMenuToggle} />
          <Link to="/" className={styles.brand}>
            <span>K</span>arezma
          </Link>
        </div>
        <div className={styles.right}>
          <Link to="/cart" className={styles.link}>
            <IoBagOutline /> <span>{cart.length}</span>
          </Link>
          {user ? (
            <>
              <span className={styles.user}>Hello, {user.name}</span>
              <button onClick={logout} className={styles.button}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className={styles.link}>
              Login
            </Link>
          )}
        </div>
      </nav>
      <Sidebar
        categories={categories}
        handleMenuToggle={handleMenuToggle}
        menuOpend={menuOpend}
      />
    </header>
  );
};

export default Header;
