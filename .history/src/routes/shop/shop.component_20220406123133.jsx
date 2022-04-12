import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
    <div className="products-container">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
    </Fragment>
  );
};

export default Shop;
