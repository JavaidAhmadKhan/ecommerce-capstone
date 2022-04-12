import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({});

export const ProductsProvider = ({ children }) => {
  return( <ProductContext.Provider>{children}</ProductContext.Provider>
  )
};
