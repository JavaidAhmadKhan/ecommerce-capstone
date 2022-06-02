import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, cartItems } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow-left"
          title="Remove Item"
          onClick={removeItemHandler}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow-right" title="Add Item" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price"> {cartItem} ₹{price}</span>
      <div
        className="remove-button"
        title="Delete Item"
        onClick={clearItemHandler}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
