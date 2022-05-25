import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";

import { CartProvider } from "./contexts/cart.context";
import { store } from "./store/store";

import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        
          <CartProvider>
            <App />
          </CartProvider>
        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
