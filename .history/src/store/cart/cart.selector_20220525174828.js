import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

const newCartCount = newCartItems.reduce(
  (total, cartItem) => total + cartItem.quantity,
  0
);

const newCartTotal = newCartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
);
