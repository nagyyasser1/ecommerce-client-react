import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Checkout.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

interface FormData {
  name: string;
  address: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

const Checkout: React.FC = () => {
  const { cart, total, removeFromCart } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to backend)
    navigate("/confirmation");
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkout_form_container}>
        <p className={styles.header}>Check-Out</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className={styles.input}
              />
            </label>
            {errors.name && (
              <span className={styles.error}>{errors.name.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Address
              <input
                id="address"
                {...register("address", { required: "Address is required" })}
                className={styles.input}
              />
            </label>
            {errors.address && (
              <span className={styles.error}>{errors.address.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cardNumber" className={styles.label}>
              Card Number
              <input
                id="cardNumber"
                {...register("cardNumber", {
                  required: "Card number is required",
                })}
                className={styles.input}
              />
            </label>
            {errors.cardNumber && (
              <span className={styles.error}>{errors.cardNumber.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="expirationDate" className={styles.label}>
              Expiration Date
              <input
                id="expirationDate"
                {...register("expirationDate", {
                  required: "Expiration date is required",
                })}
                className={styles.input}
              />
            </label>
            {errors.expirationDate && (
              <span className={styles.error}>
                {errors.expirationDate.message}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cvv" className={styles.label}>
              CVV
              <input
                id="cvv"
                {...register("cvv", { required: "CVV is required" })}
                className={styles.input}
              />
            </label>
            {errors.cvv && (
              <span className={styles.error}>{errors.cvv.message}</span>
            )}
          </div>

          <h3 className={styles.total}>Cart Items</h3>
          <ul className={styles.cartItems}>
            {cart.map((item) => (
              <li key={item.product.id} className={styles.cartItem}>
                {item.product.name} - ${item.product.price} x{" "}
                {item.variant.count}
                <FaRegTrashAlt
                  onClick={() => removeFromCart(item.product.id)}
                />
              </li>
            ))}
          </ul>

          <h3 className={styles.total}>Total: ${total.toFixed(2)}</h3>
          <div className={styles.checkout_btn_container}>
            <button type="submit" className={styles.button}>
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
