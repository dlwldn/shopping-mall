import React from "react";
import { CartType } from "../../lib/graphql/cart";
import CartItem from "./CartItem";

const CartList = ({ items }: { items: CartType[] }) => {
  return (
    <ul className="cart">
      {items.map((item) => (
        <CartItem {...item} key={item.id} />
      ))}
    </ul>
  );
};

export default CartList;
