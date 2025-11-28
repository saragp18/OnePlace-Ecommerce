import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productsReducer from "./productSlice";
import listingsReducer from "./listingsSlice";
import userReducer from "../type/userSlice";

/**
Configuración del store de Redux.
Combina los reducers de carrito, productos, listados y usuario
y define los tipos RootState y AppDispatch para tipado en la aplicación.
*/
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
