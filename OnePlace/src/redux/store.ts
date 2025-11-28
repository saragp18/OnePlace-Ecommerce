import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import postsReducer from "./postsSlice";
import userReducer from "../type/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    posts: postsReducer,
    user: userReducer,
  }
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
