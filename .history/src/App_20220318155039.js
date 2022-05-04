const App = () => {
  const categories = [
    {
      id: 1,
      title: "Shirts",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => {
        <div className="category-container">
          {/* <image/> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>;
      })}
    </div>
  );
};

export default App;
