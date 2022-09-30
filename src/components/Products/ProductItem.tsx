import React from "react";
import { Product } from "../../types/product";

const ProductItem = ({
  category,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li className="product-item">
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={image} alt={title} />
      <span className="product-item__price">{price}</span>
      <span className="product-item__rating">{rating.rate}</span>
    </li>
  );
};

export default ProductItem;
