import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const setIsCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectIsCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => newCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
)

const newCartCount = newCartItems.reduce(
  (total, cartItem) => total + cartItem.quantity,
  0
);

const newCartTotal = newCartItems.reduce(
  (total, cartItem) => total + cartItem.quantity * cartItem.price,
  0
);
