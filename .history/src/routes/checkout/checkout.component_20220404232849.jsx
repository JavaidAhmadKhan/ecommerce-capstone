import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import "./checkout.styles.scss";

const Checkout = ({}) => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id, name, quantity, price, imageUrl } = cartItem;
        return <CheckoutItem key={cartItem.id} />;
      })}
      <span className="total">Total: 0</span>
    </div>
  );
};

export default Checkout;
