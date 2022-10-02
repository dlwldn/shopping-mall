import React from "react";
import { Link } from "react-router-dom";
import { pageUrl } from "../../lib/consts/pageUrl";
import { Product } from "../../types/product";

const ProductItem = ({
  id,
  category,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li className="product-item">
      <Link to={`${pageUrl.PRODUCT_LIST}/${id}`}>
        <p className="product-item__category">{category}</p>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={image} alt={title} />
        <span className="product-item__price">{price}</span>
        <span className="product-item__rating">{rating.rate}</span>
      </Link>
    </li>
  );
};

export default ProductItem;
