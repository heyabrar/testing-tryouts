import { createStore, applyMiddleware, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const { thunk } = require("redux-thunk");
import useReducer from "./UserReducer/reducer"; // adjust the path to your root reducer
import useThemeReducer from "./ThemeReducer/reducer";

const persistConfig = {
  key: "root",
  storage, // Use localStorage to persist state
  whitelist: ["user", "theme"], // Only persist the 'user' reducer
};

const rootReducer = combineReducers({
  user: useReducer,
  theme: useThemeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with middleware
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk) // Using redux-thunk for async actions
);

// Create persistor to sync the store with localStorage
export const persistor = persistStore(store);
