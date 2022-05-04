import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
});

export const CartProvider = ({ children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
