import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = ({}) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity, price, imageUrl } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span>decrement</span>
                <span>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
