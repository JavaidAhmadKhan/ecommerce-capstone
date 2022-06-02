import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "jeans",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0445/1681/products/levisss_001.JPG",
    route: "shop/jeans",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl:
      "https://img.joomcdn.net/c7910393e8c828a4b91455049930183063a64115_original.jpeg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://sneakernews.com/wp-content/uploads/2021/02/sacai-Nike-Blazer-Low-White-Grey-DD1877-002-5.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
