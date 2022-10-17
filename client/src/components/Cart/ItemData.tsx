import React from "react";
import { Product } from "../../lib/graphql/products";

const ItemData = ({
  imageUrl,
  price,
  title,
}: Pick<Product, "imageUrl" | "price" | "title">) => {
  return (
    <>
      <img className="cart-item__image" src={imageUrl} alt={title} />
      <p className="cart-item__price">{price}</p>
      <p className="cart-item__title">{title}</p>
    </>
  );
};

export default ItemData;
