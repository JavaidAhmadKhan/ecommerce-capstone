import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} name={name} price={price} />
      ))}
    </div>
  );
};

export default Shop;
