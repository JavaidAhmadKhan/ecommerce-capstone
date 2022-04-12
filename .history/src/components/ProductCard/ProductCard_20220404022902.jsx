import "./product-card.styles.scss";
import Button from "../Button/Button";

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
  return (
    <div className="product-card-container">
      <img src="" alt="" />
      <div className="footer">
        <span className="name"></span>
        <span className="price"></span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
