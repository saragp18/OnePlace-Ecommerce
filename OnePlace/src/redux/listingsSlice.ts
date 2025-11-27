import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../services/supabaseClient";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Listing {
  id?: number;
  userId: string;
  name: string;
  description?: string;
  price: string;
  category?: string;
  available?: boolean;
  image?: string;
}

interface ListingsState {
  items: Listing[];
  loading: boolean;
  error: string | null;
}

const initialState: ListingsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchListingsByUser = createAsyncThunk<Listing[], string>(
  "listings/fetchByUser",
  async (userId, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("listings")
      .select("*")
      .eq("userId", userId);

    if (error) return rejectWithValue(error.message);
    return data || [];
  }
);

export const createListing = createAsyncThunk<Listing, Listing>(
  "listings/create",
  async (listing, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("listings")
      .insert(listing)
      .select()
      .single();

    if (error) return rejectWithValue(error.message);
    return data as Listing;
  }
);

export const deleteListing = createAsyncThunk<number, number>(
  "listings/delete",
  async (id, { rejectWithValue }) => {
    const { error } = await supabase.from("listings").delete().eq("id", id);
    if (error) return rejectWithValue(error.message);
    return id;
  }
);

const listingsSlice = createSlice({
  name: "listings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListingsByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListingsByUser.fulfilled, (state, action: PayloadAction<Listing[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(createListing.fulfilled, (state, action: PayloadAction<Listing>) => {
        state.items.push(action.payload);
      })
      .addCase(deleteListing.fulfilled, (state, action: PayloadAction<number>) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export default listingsSlice.reducer;
