import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailInfo from "../../components/Products/ProductDetailInfo";
import { graphqlFetcher } from "../../lib/apis/base";
import { queryKeys } from "../../lib/consts/queryKey";
import { GET_PRODUCT, Product } from "../../lib/graphql/products";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useQuery<{ product: Product }>(
    [queryKeys.PRODUCTS, id],
    () => graphqlFetcher(GET_PRODUCT, { id })
  );

  if (!data) return null;

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetailInfo {...data.product} />
    </div>
  );
};

export default ProductDetail;
