import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, Variant } from "../types";

interface CartItem {
  product: Product;
  variant: Variant;
}

interface CartContextType {
  cart: CartItem[];
  total: number;
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.product.price * item.variant.count,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  const addToCart = (cartItem: CartItem) => {
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.product.id !== id)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
