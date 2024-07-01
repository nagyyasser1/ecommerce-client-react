import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import styles from "./styles/Cart.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cart, total, removeFromCart } = useCart();

  if (cart.length === 0)
    return (
      <div className={styles.cart}>
        <p>Cart empty</p>
      </div>
    );

  return (
    <div className={styles.cart}>
      <ul className={styles.cart_list}>
        {cart.map((item, index) => (
          <li key={index} className={styles.cart_list_item}>
            <img
              src={item.product.images[0]}
              className={styles.cart_list_item_img}
            />
            <div className={styles.content}>
              <div>
                <p>{item.product.name}</p>
                <strong> {item.product.price}</strong>
                <div>
                  <p>Color: {item.variant.color}</p>
                  <p>Size: {item.variant.size}</p>
                  <p>Quantity: {item.variant.count}</p>
                </div>
              </div>

              <FaRegTrashAlt onClick={() => removeFromCart(item.product.id)} />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.cart_info}>Total: {total && total}</div>
      <div className={styles.cart_actions}>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;
