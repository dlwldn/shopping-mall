import React from "react";
import { useQuery } from "react-query";
import ProductItem from "../../components/Products/ProductItem";
import { fetcher } from "../../lib/apis/base";
import { queryKeys } from "../../lib/consts/queryKey";
import { Product } from "../../types/product";

const ProductList = () => {
  const { data } = useQuery<Product[]>(queryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  console.log(data);

  return (
    <div>
      <ul className='products'>
        {data?.map((product) => {
          return <ProductItem {...product} key={product.id} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
