import "./cart-item.styles.scss";

const CartItem = ({ CartItem }) => {
  const { name } = CartItem;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default CartItem;
