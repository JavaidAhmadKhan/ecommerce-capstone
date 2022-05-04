import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ id, name, price, imageUrl }) => (
        <ProductCard name={name} price={price}/>
      ))}
    </div>
  );
};

export default Shop;
