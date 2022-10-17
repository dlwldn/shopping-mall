import React from "react";
import { useQuery } from "react-query";
import CartList from "../../components/Cart/CartList";
import { graphqlFetcher } from "../../lib/apis/base";
import { queryKeys } from "../../lib/consts/queryKey";
import { CartType, GET_CART } from "../../lib/graphql/cart";

const Cart = () => {
  const { data } = useQuery<CartType[]>([queryKeys.CART], () =>
    graphqlFetcher(GET_CART),
    {
      staleTime: 0,
      cacheTime: 1000,
    }
  );

  const cartItems = Object.values(data || {}) as CartType[];

  if(!cartItems.length) return <div>장바구니가 비었어요.</div>

  return <CartList items={cartItems} />;
};

export default Cart;