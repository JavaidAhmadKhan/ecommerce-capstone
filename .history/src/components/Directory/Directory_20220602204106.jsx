import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "shirts",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0445/1681/products/levisss_001.JPG",
    route: "shop/shirts",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://img.joomcdn.net/c7910393e8c828a4b91455049930183063a64115_original.jpeg",
    route: "shop/shirts",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl:
      "https://sneakernews.com/wp-content/uploads/2021/02/sacai-Nike-Blazer-Low-White-Grey-DD1877-002-5.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl:
      "https://fashion.luxury/wp-content/uploads/2018/06/6-Womens-Clothing-Boutiques-in-New-York-City-fashion-feature.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl:
      "https://static.citylifestyle.com/articles/simple-and-sophisticated-style-for-the-fashion-forward-man/September%20Issue-39-900.jpg?v=1",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
