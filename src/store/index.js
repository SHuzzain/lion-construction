import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import productSlice from "./slices/product-slice";
import cartSlice from "./slices/cart-slice";
import wishlistSlice from "./slices/wishlist-slice";
import compareSlice from "./slices/compare-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist", "compare"],
};

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  wishlist: wishlistSlice,
  compare: compareSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        },
      }),
  });

  store.__persistor = persistStore(store);
  return store;
};

export const wrapper = createWrapper(makeStore);