import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
const { thunk } = require("redux-thunk");
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage, // Use localStorage to persist state
  whitelist: ["user", "theme", "cart"], // Only persist the 'user' reducer
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with middleware
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk) // Using redux-thunk for async actions
);

// Create persistor to sync the store with localStorage
export const persistor = persistStore(store);
