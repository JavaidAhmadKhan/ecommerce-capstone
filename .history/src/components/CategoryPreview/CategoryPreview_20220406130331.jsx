import ProductCard from "../ProductCard/ProductCard";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products, }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {price}
        {/* {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
      </div>
    </div>
  );
};

export default CategoryPreview;
