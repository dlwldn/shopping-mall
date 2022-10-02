import React from "react";
import { Product } from "../../types/product";

const ProductDetailInfo = ({ category, image, price, rating, title, description }: Product) => {
  return (
    <div className="product-detail">
      <p className="product-detail__category">{category}</p>
      <p className="product-detail__title">{title}</p>
      <img className="product-detail__image" src={image} alt={title} />
      <p className="product-detail__description">{description}</p>
      <span className="product-detail__price">{price}</span>
      <span className="product-detail__rating">{rating.rate}</span>
    </div>
  );
};

export default ProductDetailInfo;
