import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../redux/user";
import supabase from "../services/supabaseClient";

/**
Función fetchUser.
Obtiene los datos de un usuario desde Supabase dado su ID.

Entradas:
- userId: string → ID del usuario a consultar.

Salidas:
- Retorna un objeto normalizado del tipo User si se encuentra el usuario.
- En caso de error, rechaza la promesa con un mensaje de error.
*/
export const fetchUser = createAsyncThunk<User, string>(
  "user/fetchUser",
  async (userId, { rejectWithValue }) => {
    const { data, error } = await supabase.from("User").select("*").eq("id", userId).maybeSingle();
    if (error) return rejectWithValue(error.message);

    if (!data) {
      return rejectWithValue("User not found");
    }

    // Normalize possible column names coming from Supabase
    const normalized: User = {
      id: (data as any)?.id,
      name: (data as any)?.name || (data as any)?.nombre || (data as any)?.full_name || "",
      email: (data as any)?.email || (data as any)?.gmail || "",
      phone: (data as any)?.phone || (data as any)?.telefono || "",
    };

    return normalized;
  }
);


/**
Función updateUser.
Actualiza los datos de un usuario en Supabase.

Entradas:
- updatedUser: User → Objeto con la información actualizada del usuario.

Salidas:
- Retorna el objeto User actualizado si la operación es exitosa.
- En caso de error, rechaza la promesa con un mensaje de error.
*/
export const updateUser = createAsyncThunk<User, User>(
  "user/updateUser",
  async (updatedUser, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("User")
      .update(updatedUser)
      .eq("id", updatedUser.id)
      .select()
      .single();
    if (error) return rejectWithValue(error.message);
    return data as User;
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
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || action.error.message || "Error fetching user";
        state.data = null;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.data = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;