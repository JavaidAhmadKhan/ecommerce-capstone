import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";

import "./checkout-item.styles.scss";

import { ReactComponent as Delete } from "../../assets/trash-solid.svg";
import { ReactComponent as Increase } from "../../assets/plus-solid.svg";
import { ReactComponent as Decrease } from "../../assets/minus-solid.svg";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemHandler = () =>
    useDispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
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
