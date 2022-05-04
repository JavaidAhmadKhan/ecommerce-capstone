import { createContext, useState } from "react";



export const CartDropdownContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
  );
};
