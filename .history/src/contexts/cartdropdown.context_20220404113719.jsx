import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  
  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
