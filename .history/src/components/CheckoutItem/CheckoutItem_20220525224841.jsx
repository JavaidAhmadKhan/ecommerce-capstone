import { useSelector } from "react-redux";

import { ReactComponent as Delete } from "../../assets/trash-solid.svg";
import { ReactComponent as Increase } from "../../assets/plus-solid.svg";
import { ReactComponent as Decrease } from "../../assets/minus-solid.svg";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  

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
          {/* &#xFF0D; */}
          <Decrease width="20" height="20" />
        </div>

        <span className="value">{quantity}</span>
        <div className="arrow-right" title="Add Item" onClick={addItemHandler}>
          {/* &#xFF0B; */}
          <Increase width="20" height="20" />
        </div>
      </span>
      <span className="price">₹{price}</span>
      <div
        className="remove-button"
        title="Delete Item"
        onClick={clearItemHandler}
      >
        <Delete width="20" height="20" />
      </div>
    </div>
  );
};

export default CheckoutItem;