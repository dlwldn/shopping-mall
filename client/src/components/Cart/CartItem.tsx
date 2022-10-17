import React, { ForwardedRef, forwardRef, SyntheticEvent } from "react";
import { useMutation } from "react-query";
import { graphqlFetcher } from "../../lib/apis/base";
import { queryKeys } from "../../lib/consts/queryKey";
import { CartType, DELETE_CART, UPDATE_CART } from "../../lib/graphql/cart";
import { getClient } from "../../queryClient";
import ItemData from "./ItemData";

const CartItem = (
  { id, product: { imageUrl, price, title }, amount }: CartType,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const queryClient = getClient();
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount }),
    {
      onMutate: async ({ id, amount }) => {
        await queryClient.cancelQueries(queryKeys.CART);
        const { cart: prevCart } = queryClient.getQueryData<{
          cart: CartType[];
        }>(queryKeys.CART) || { cart: [] };
        if (!prevCart) return null;

        const targetIndex = prevCart.findIndex(
          (cartItem) => cartItem.id === id
        );
        if (targetIndex === undefined || targetIndex < 0) return prevCart;

        const newCart = [...prevCart];
        newCart.splice(targetIndex, 1, { ...newCart[targetIndex], amount });
        queryClient.setQueryData(queryKeys.CART, { cart: newCart });
        return prevCart;
      },
      onSuccess: ({ updateCart }) => {
        const { cart: prevCart } = queryClient.getQueryData<{
          cart: CartType[];
        }>(queryKeys.CART) || { cart: [] };
        const targetIndex = prevCart?.findIndex(
          (cartItem) => cartItem.id === updateCart.id
        );
        if (!prevCart || targetIndex === undefined || targetIndex < 0) return;

        const newCart = [...prevCart];
        newCart.splice(targetIndex, 1, updateCart);
        queryClient.setQueryData(queryKeys.CART, { cart: newCart });
      },
    }
  );

  const { mutate: deleteCart } = useMutation(
    ({ id }: { id: string }) => graphqlFetcher(DELETE_CART, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.CART);
      },
    }
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    if (amount < 1) return;
    updateCart({ id, amount });
  };

  const handleDeleteItem = () => {
    deleteCart({ id });
  };

  return (
    <li className="cart-item">
      <input
        className="cart-item__checkbox"
        type="checkbox"
        name={`select-item`}
        ref={ref}
        data-id={id}
      />
      <ItemData imageUrl={imageUrl} price={price} title={title} />
      <input
        type="number"
        className="cart-item__amount"
        value={amount}
        min={1}
        onChange={handleUpdateAmount}
      />
      <button
        className="cart-item__button"
        type="button"
        onClick={handleDeleteItem}
      >
        삭제
      </button>
    </li>
  );
};

export default forwardRef(CartItem);
