import ProductCard from "../ProductCard/ProductCard";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <ProductCard key={products.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
