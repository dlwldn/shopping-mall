import React from "react";
import { Product } from "../../lib/graphql/products";
const ProductDetailInfo = ({ imageUrl, price, title, description }: Product) => {
  return (
    <div className="product-detail">
      <p className="product-detail__title">{title}</p>
      <img className="product-detail__image" src={imageUrl} alt={title} />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">{price}</span>
    </div>
  );
};

export default ProductDetailInfo;
