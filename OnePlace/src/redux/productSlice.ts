import { createSlice } from "@reduxjs/toolkit";
import productsData from "../data/products.json";
import type { Product as DataProduct } from "../type/type";

export interface Product {
  id: number;
  name: string;
  price: string;
  color: string;
  sizes?: string[];
  description?: string;
  materials?: string[];
  image: string[];
}

interface ProductsState {
  items: DataProduct[];
  selectedProductId: number | null;
}

const normalizedProducts: DataProduct[] = (productsData as any[]).map((p) => ({
  id: p.id,
  name: p.name,
  price: p.price,
  color: p.color,
  sizes: p.sizes || [],
  description: p.description || "",
  materials: p.materials || [],
  image: p.image || [],
}));

const initialState: ProductsState = {
  items: normalizedProducts,
  selectedProductId: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    selectProductById: (state, action) => {
      state.selectedProductId = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProductId = null;
    },
  },
});

export const { selectProductById, clearSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;
