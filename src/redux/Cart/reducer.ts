import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: Array.isArray(state.cart)
          ? [...state.cart, action.payload]
          : [action.payload],
      };
    }

    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(
          (item: any) => item?.id !== action?.payload?.id
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
