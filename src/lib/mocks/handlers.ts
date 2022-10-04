import { graphql } from "msw";
import { ADD_CART, CartType, GET_CART } from "../graphql/cart";
import { GET_PRODUCT, GET_PRODUCTS } from "../graphql/products";

const mockProducts = (() =>
  Array.from({ length: 20 }).map((_, index) => ({
    id: index + 1 + "",
    imageUrl: `https://placeimg.com/200/150/${index + 1}`,
    price: 50000,
    title: "임시상품",
    description: "임시상세내용",
    createdAt: new Date(1645735501883 + index * 1000 * 60 * 60 * 10).toString(),
  })))();

let cartData: { [key: string]: CartType } = {};

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mockProducts,
      })
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mockProducts.find((item) => item.id === req.variables.id);
    if (found) return res(ctx.data(found));
    return res();
  }),
  graphql.query(GET_CART, (req, res, ctx) => {
    return res(ctx.data(Object.values(cartData)));
  }),
  graphql.mutation(ADD_CART, (req, res, ctx) => {
    const newData = { ...cartData };
    const id = req.variables.id;
    if(newData[id]) {
      newData[id] = {
        ...newData[id],
        amount: (newData[id].amount || 0) + 1
      }
    } else {
      const found = mockProducts.find((item) => item.id === req.variables.id);
      if(found) {
        newData[id] = {
          ...found,
          amount: 1
        }
      }
    }
    cartData = newData;
    return res(ctx.data(newData))
  }),
];
