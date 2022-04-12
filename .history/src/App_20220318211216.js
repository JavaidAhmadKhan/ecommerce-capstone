import CategoryItem from "./components/CategoryItem/CategoryItem";

import "./categories.styles.scss";

const App = () => {
  

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
