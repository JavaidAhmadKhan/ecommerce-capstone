import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview">
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
    </div>
  );
};

export default CategoryPreview;
