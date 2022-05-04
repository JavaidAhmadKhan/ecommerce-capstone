import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = ({ name }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        {cartItems.map((cartItem) => {
          return (
            <div>
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
