import React from "react";
import { Product } from "../../lib/graphql/products";
import ProductItem from "./ProductItem";

const ProductList = ({ list }: { list: Product[] }) => {
  return (
    <ul className="products">
      {list.map((product) => {
        return <ProductItem {...product} key={product.id} />;
      })}
    </ul>
  );
};

export default ProductList;
