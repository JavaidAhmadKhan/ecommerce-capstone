import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products, name }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <h2>kya</h2>
      <div className="preview">
        {products
          .filter((product, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
