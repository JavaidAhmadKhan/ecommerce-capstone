import { Outlet } from "react-router-dom";

import Directory from "../../components/Directory/Directory";

const Home = () => {
  const categories = [
    {
      title: "shirts",
      imageUrl:
        "https://thumbs.dreamstime.com/b/assorted-blue-shirts-hanging-wooden-hangers-assorted-blue-shirts-hanging-wooden-hangers-124441827.jpg",
      id: 1,
      linkUrl: "shop/shirts",
    },
    {
      title: "jackets",
      imageUrl:
        "https://img.joomcdn.net/c7910393e8c828a4b91455049930183063a64115_original.jpeg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://sneakernews.com/wp-content/uploads/2021/02/sacai-Nike-Blazer-Low-White-Grey-DD1877-002-5.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://fashion.luxury/wp-content/uploads/2018/06/6-Womens-Clothing-Boutiques-in-New-York-City-fashion-feature.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://g3fashion.com/blog/wp-content/uploads/2020/07/chechs-scaled-e1597730760349.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
