import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utilis";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

const addItemToCart = (productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  updateCartItemsReducer(newCartItems);
};

const removeItemToCart = (cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  updateCartItemsReducer(newCartItems);
};

const clearItemFromCart = (cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  updateCartItemsReducer(newCartItems);
};
