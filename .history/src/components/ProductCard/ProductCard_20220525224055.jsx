import { useDispatch, useSelector } from "react-redux";

import Button from "../Button/Button";
import { addItemToCart } from "../../store/cart/cart.action";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;
  const addItemToCart = useSelector();

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name"> {name}</span>
        <span className="price"> ₹{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
