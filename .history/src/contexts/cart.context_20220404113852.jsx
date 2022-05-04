import { createContext, useState } from "react";

export const CartContext = createContext({
  products: [],
});

export const CartProvider = ({ children }) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
