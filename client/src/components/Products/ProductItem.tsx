import React from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { graphqlFetcher } from "../../lib/apis/base";
import { pageUrl } from "../../lib/consts/pageUrl";
import { ADD_CART } from "../../lib/graphql/cart";
import { Product } from "../../lib/graphql/products";

const ProductItem = ({
  id,
  description,
  imageUrl,
  price,
  createdAt,
  title,
}: Product) => {
  const { mutate: addCart } = useMutation((id: string) => graphqlFetcher(ADD_CART, { id }))
  return (
    <li className="product-item">
      <Link to={`${pageUrl.PRODUCT_LIST}/${id}`}>
        <p className="product-item__title">{title}</p>
        <img className="product-item__image" src={imageUrl} alt={title} />
        <span className="product-item__price">{price}</span>
      </Link>
      <button className="product-item__add-cart" onClick={() => addCart(id)}>담기</button>
    </li>
  );
};

export default ProductItem;
