import { useContext } from "react";

import Button from "../Button/Button";
import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { CartContext } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name"> {name}</span>
        <span className="price"> {price}</span>
      </div>
      <Button buttonType="inverted">Add to card</Button>
    </div>
  );
};

export default ProductCard;