import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import ProductDetailInfo from "../../components/Products/ProductDetailInfo";
import { fetcher } from "../../lib/apis/base";
import { pageUrl } from "../../lib/consts/pageUrl";
import { queryKeys } from "../../lib/consts/queryKey";
import { Product } from "../../types/product";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([queryKeys.PRODUCTS, id], () =>
    fetcher({ method: "GET", path: `${pageUrl.PRODUCT_LIST}/${id}` })
  );

  if (!data) return null;

  return (
    <div>
      <h2>상품상세</h2>
      <ProductDetailInfo {...data} />
    </div>
  );
};

export default ProductDetail;
