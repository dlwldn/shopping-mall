import React from "react";
import { useQuery } from "react-query";
import ProductList from "../../components/Products/ProductList";
import { graphqlFetcher } from "../../lib/apis/base";
import { queryKeys } from "../../lib/consts/queryKey";
import { GET_PRODUCTS, Products } from "../../lib/graphql/products";

const Product = () => {
  const { data } = useQuery<Products>(queryKeys.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  return (
    <div>
      <h2>상품목록</h2>
      <ProductList list={data?.products || []}/>
    </div>
  );
};

export default Product;
