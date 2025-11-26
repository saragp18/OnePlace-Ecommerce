import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
}

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [
    { id: 1, name: "Black Bag", price: 50, image: "", color: "Black" },
    { id: 2, name: "Leather Purse", price: 70, image: "", color: "Brown" },
    { id: 3, name: "Mini Backpack", price: 65, image: "", color: "Gray" },
    { id: 4, name: "Travel Bag", price: 120, image: "", color: "Blue" },
    { id: 5, name: "Luxury Bag", price: 300, image: "", color: "Gold" }
  ]
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}
});

export default productsSlice.reducer;
