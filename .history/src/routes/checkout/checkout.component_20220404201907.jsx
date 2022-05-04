import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
