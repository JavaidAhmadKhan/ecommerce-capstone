import DirectoryItem from "../DirectoryItem/DirectoryItem";
import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "shirts",
    imageUrl:
      "https://thumbs.dreamstime.com/b/assorted-blue-shirts-hanging-wooden-hangers-assorted-blue-shirts-hanging-wooden-hangers-124441827.jpg",
    route: "shop/shirts",
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
      "https://media.istockphoto.com/photos/handsome-man-shopping-for-new-clothes-in-store-picture-id1189091313?k=20&m=1189091313&s=612x612&w=0&h=8zBj4HJMAaCLzmRKfoHvfMueqa7FFPA3zHttnoFnp9Y=",
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
