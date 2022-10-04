import { atom, useRecoilValue, selectorFamily } from "recoil";
import { recoilKey } from "../lib/consts/recoilKey";

const cartState = atom<Map<string, number>>({
  key: recoilKey.CART_STATE,
  default: new Map(),
});

export const cartItemSelector = selectorFamily<number | undefined, string>({
  key: recoilKey.CART_ITEM,
  get:
    (id: string) =>
    ({ get }) => {
      const carts = get(cartState);
      return carts.get(id);
    },
  set:
    (id: string) =>
    ({ get, set }, newValue) => {
      if (typeof newValue === "number") {
        const newCart = new Map([...get(cartState)])
        newCart.set(id, newValue);
        set(cartState, newCart);
      }
    },
});
