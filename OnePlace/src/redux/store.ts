import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import listingsReducer from "./listingsSlice";
import userReducer from "../type/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    listings: listingsReducer,
    user: userReducer,
  }
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
