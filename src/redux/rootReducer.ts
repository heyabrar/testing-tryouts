import { combineReducers } from "redux";
import useReducer from "./UserReducer/reducer";
import useThemeReducer from "./ThemeReducer/reducer";

const rootReducer = combineReducers({
  user: useReducer as any,
  theme: useThemeReducer as any,
});

export default rootReducer;
