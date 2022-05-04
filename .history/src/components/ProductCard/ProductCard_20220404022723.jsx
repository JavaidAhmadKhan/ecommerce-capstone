import "./product-card.styles.scss";
import Button from "../Button/Button";

const ProductCard = () => {
  return (
    <div className="product-card-container">
      <img src="" alt="" />
      <div className="footer">
        <span className="name"></span>
        <span className="price"></span>
      </div>
      <Button>Add to Card</Button>
    </div>
  );
};

export default ProductCard;
