import { Outlet } from "react-router-dom";

import Directory from "../../components/Directory/Directory";

const Home = () => {
  const categories = [
    {
      title: "shirts",
      imageUrl:
        "https://5.imimg.com/data5/FH/KJ/OI/SELLER-3023183/men-branded-slim-fit-shirt-500x500.jpg",
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
        "https://static.citylifestyle.com/articles/simple-and-sophisticated-style-for-the-fashion-forward-man/September%20Issue-39-900.jpg?v=1",
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