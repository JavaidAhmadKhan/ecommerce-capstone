import Button from "../Button/Button";

import CartItem from "../CartItem/CartItem";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
        {[].map(item => <CartItem cartItem={item}/>)}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
