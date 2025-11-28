import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /**
    Función addToCart.
    Agrega un producto al carrito. Si el producto ya existe, incrementa su cantidad en 1.

    Entradas:
    - action: PayloadAction<Product> → Objeto que contiene el producto a agregar.

    Salidas:
    Actualiza el estado del carrito (CartState) agregando el producto o incrementando su cantidad.
    */
    addToCart: (state, action: PayloadAction<Product>) => {
      const existing = state.items.find((p) => p.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    /**
    Función removeFromCart.
    Elimina un producto específico del carrito por su id.

    Entradas:
    - action: PayloadAction<number> → El id del producto a eliminar.

    Salidas:
    Actualiza el estado del carrito (CartState) eliminando el producto correspondiente.
    */

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    
/**
    Función clearCart.
    Vacía todos los productos del carrito.

    Entradas:
    No recibe parámetros.

    Salidas:
    Actualiza el estado del carrito (CartState) dejando la lista de items vacía.
    */
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
