import { combineReducers } from "redux";
import useReducer from "./UserReducer/reducer";
import useThemeReducer from "./ThemeReducer/reducer";
import cartReducer from "./Cart/reducer";

const rootReducer = combineReducers({
  user: useReducer as any,
  theme: useThemeReducer as any,
  cart: cartReducer as any,
});

export default rootReducer;
