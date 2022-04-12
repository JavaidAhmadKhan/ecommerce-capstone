import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ id, name, price, imageUrl }) => (
        <div key={id}>
          <h1>{name}</h1>
          <img src={imageUrl} alt="products" />
          <p>{price}</p>
        </div>
      ))}
    </div>
  );
};

export default Shop;
