const App = () => {
  const categories = [
    {
      id: 1,
      title: "Shirts",
    },
    {
      id: 2,
      title: "Jeans",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          {/* <image/> */}
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
