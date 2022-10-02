import React from "react";
import { useQuery } from "react-query";
import ProductItem from "../../components/Products/ProductItem";
import { fetcher } from "../../lib/apis/base";
import { pageUrl } from "../../lib/consts/pageUrl";
import { queryKeys } from "../../lib/consts/queryKey";
import { Product } from "../../types/product";

const ProductList = () => {
  const { data } = useQuery<Product[]>(queryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: pageUrl.PRODUCT_LIST,
    })
  );

  console.log(data);

  return (
    <div>
      <h2>상품목록</h2>
      <ul className='products'>
        {data?.map((product) => {
          return <ProductItem {...product} key={product.id} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
