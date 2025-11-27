import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/user";


export const fetchUser = createAsyncThunk<User, string>(
  "user/fetchUser",
  async (userId) => {
    const res = await fetch(`http://localhost:3001/users/${userId}`);
    const data: User = await res.json();
    return data;
  }
);


export const updateUser = createAsyncThunk<User, User>(
  "user/updateUser",
  async (updatedUser) => {
    const res = await fetch(`http://localhost:3001/users/${updatedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });
    const data: User = await res.json();
    return data;
  }
);

interface UserState {
  data: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.data = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

