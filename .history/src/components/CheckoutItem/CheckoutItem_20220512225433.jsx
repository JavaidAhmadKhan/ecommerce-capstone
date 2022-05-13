import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity, total } = cartItem;
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
          &#xFF0D;
        </div>
        <FontAwesomeIcon icon="fa-solid fa-trash" />
        <span className="value">{quantity}</span>
        <div className="arrow-right" title="Add Item" onClick={addItemHandler}>
          &#xFF0B;
        </div>
      </span>
      <span className="price">₹{price}</span>
      <div
        className="remove-button"
        title="Delete Item"
        onClick={clearItemHandler}
      >
        &#xFF38;
      </div>
    </div>
  );
};

export default CheckoutItem;
