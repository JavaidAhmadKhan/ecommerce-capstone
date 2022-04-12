import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
          {cartItems.map((cartItem) => {
            return (
              <div>
                <div>{cartItem.name}</div>
                <div>{cartItem.price}</div>
              </div>
            );
          }
          )}
      </div>
    </div>
  );
};

export default Checkout;
