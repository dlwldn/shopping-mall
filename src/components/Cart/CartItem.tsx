import React, { SyntheticEvent } from "react";
import { useMutation } from "react-query";
import { graphqlFetcher } from "../../lib/apis/base";
import { CartType, UPDATE_CART } from "../../lib/graphql/cart";

const CartItem = ({ id, imageUrl, price, amount, title }: CartType) => {
  const { mutate: updateCart } = useMutation(
    ({ id, amount }: { id: string; amount: number }) =>
      graphqlFetcher(UPDATE_CART, { id, amount })
  );

  const handleUpdateAmount = (e: SyntheticEvent) => {
    const amount = Number((e.target as HTMLInputElement).value);
    updateCart({ id, amount });
  };

  return (
    <li className="cart-item">
      <img src={imageUrl} alt={title} />
      <p className="cart-item__price">{price}</p>
      <p className="cart-item__title"></p>
      <input
        type="number"
        className="cart-item__amount"
        value={amount}
        onChange={handleUpdateAmount}
      />
    </li>
  );
};

export default CartItem;
