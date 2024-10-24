import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const handleAddToCartAction = (payload: any) => ({
  type: ADD_TO_CART,
  payload,
});

export const handleRemoveFromCartAction = (payload: any) => ({
  type: REMOVE_FROM_CART,
  payload,
});
