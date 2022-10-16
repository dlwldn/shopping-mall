import React from "react";
import { CartType } from "../../lib/graphql/cart";

const ItemData = ({
  imageUrl,
  price,
  title,
}: Pick<CartType, "imageUrl" | "price" | "title">) => {
  return (
    <>
      <img className="cart-item__image" src={imageUrl} alt={title} />
      <p className="cart-item__price">{price}</p>
      <p className="cart-item__title"></p>
    </>
  );
};

export default ItemData;
