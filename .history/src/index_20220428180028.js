import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
