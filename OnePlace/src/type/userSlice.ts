import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../redux/user";
import supabase from "../services/supabaseClient";


export const fetchUser = createAsyncThunk<User, string>(
  "user/fetchUser",
  async (userId, { rejectWithValue }) => {
    // Primero intentar obtener el usuario de la sesión de autenticación
    const { data: { user: authUser } } = await supabase.auth.getUser();
    
    // Intentar obtener datos de la tabla "User" (con mayúscula, como está en la BD)
    let tableData = null;
    const { data, error } = await supabase
      .from("User")
      .select("id, nombre, gmail")
      .eq("id", userId)
      .single();
    
    if (!error && data) {
      tableData = data;
    }

    // Si tenemos el usuario de autenticación, usarlo como base
    if (authUser && authUser.id === userId) {
      const normalized: User = {
        id: userId,
        name: tableData?.nombre || authUser.user_metadata?.name || authUser.email?.split("@")[0] || "",
        email: tableData?.gmail || authUser.email || "",
      };
      return normalized;
    }

    // Si tenemos datos de la tabla pero no de auth, usar los de la tabla
    if (tableData) {
      const normalized: User = {
        id: (tableData as any)?.id || userId,
        name: (tableData as any)?.nombre || "",
        email: (tableData as any)?.gmail || "",
      };
      return normalized;
    }

    // Si todo falla, rechazar con un mensaje de error
    return rejectWithValue("No se pudo obtener la información del usuario. Verifica que la tabla 'User' exista y tenga los permisos correctos.");
  }
);


export const updateUser = createAsyncThunk<User, User>(
  "user/updateUser",
  async (updatedUser, { rejectWithValue }) => {
    // Mapear los campos del User interface a las columnas de la BD
    const updateData: any = {
      nombre: updatedUser.name,
      gmail: updatedUser.email,
    };

    const { data, error } = await supabase
      .from("User")
      .update(updateData)
      .eq("id", updatedUser.id)
      .select("id, nombre, gmail")
      .single();
    
    if (error) return rejectWithValue(error.message);
    
    // Normalizar la respuesta de la BD al formato User
    const normalized: User = {
      id: (data as any)?.id,
      name: (data as any)?.nombre || "",
      email: (data as any)?.gmail || "",
    };
    
    return normalized;
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