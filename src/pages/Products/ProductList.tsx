import React from "react";
import { useQuery } from "react-query";
import ProductItem from "../../components/Products/ProductItem";
import { graphqlFetcher } from "../../lib/apis/base";
import { queryKeys } from "../../lib/consts/queryKey";
import { GET_PRODUCTS, Products } from "../../lib/graphql/products";

const ProductList = () => {
  const { data } = useQuery<Products>(queryKeys.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  return (
    <div>
      <h2>상품목록</h2>
      <ul className="products">
        {data?.products?.map((product) => {
          return <ProductItem {...product} key={product.id} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
