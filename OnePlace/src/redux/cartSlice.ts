import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [
    {
    id: 1,
    name: "Basic Hoodie",
    price: 50,
    image: "https://your-image-link.jpg",
    color: "White",
  }
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      
      const existing = state.items.find((p) => p.id === action.payload.id);
      if (!existing) {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
