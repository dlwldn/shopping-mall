import React from "react";
import { CartType } from "../../lib/graphql/cart";

type Props = {};

const CartItem = ({ id, imageUrl, price, amount, title }: CartType) => {
  return (
    <li>
      {id} {imageUrl} {price} {amount} {title}
    </li>
  );
};

export default CartItem;
