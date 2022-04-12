import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name } = cartItem;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default CartItem;
