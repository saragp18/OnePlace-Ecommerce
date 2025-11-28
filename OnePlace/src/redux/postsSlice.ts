import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../services/supabaseClient";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id?: string;
  "user-id": string;
  "fecha-creada"?: string;
  nombre: string;
  tipo: string; // Tipo de ropa (text)
  precio: number | string;
  disponible: boolean;
  descripcion: string;
  imagen: string;
}

interface PostsState {
  items: Post[];
  allPosts: Post[]; // Posts de todos los usuarios para la página "New"
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  allPosts: [],
  loading: false,
  error: null,
};

export const fetchPostsByUser = createAsyncThunk<Post[], string>(
  "posts/fetchByUser",
  async (userId) => {
    // Usar el nombre exacto de la tabla "Post" y la columna "user-id"
    const { data, error } = await supabase
      .from("Post")
      .select("*")
      .eq("user-id", userId);

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    return (data || []) as Post[];
  }
);

export const fetchAllPosts = createAsyncThunk<Post[], void>(
  "posts/fetchAll",
  async () => {
    // Obtener todos los posts ordenados por fecha de creación (más recientes primero)
    const { data, error } = await supabase
      .from("Post")
      .select("*")
      .order("fecha-creada", { ascending: false });

    if (error) {
      console.error("Error fetching all posts:", error);
      return [];
    }

    return (data || []) as Post[];
  }
);

export const createPost = createAsyncThunk<Post, Omit<Post, "id" | "fecha-creada">>(
  "posts/create",
  async (postData, { rejectWithValue }) => {
    // Usar el nombre exacto de la tabla "Post"
    const tableName = "Post";
    
    // Preparar los datos para insertar con los nombres correctos de columnas
    const insertData: any = {
      "user-id": postData["user-id"],
      nombre: postData.nombre,
      tipo: postData.tipo,
      precio: typeof postData.precio === "string" ? parseFloat(postData.precio) : postData.precio,
      disponible: postData.disponible,
      descripcion: postData.descripcion,
      imagen: postData.imagen,
    };

    const { data, error } = await supabase
      .from(tableName)
      .insert(insertData)
      .select()
      .single();

    if (error) {
      return rejectWithValue(error.message);
    }

    return data as Post;
  }
);

export const deletePost = createAsyncThunk<string, string>(
  "posts/delete",
  async (id, { rejectWithValue }) => {
    const { error } = await supabase.from("Post").delete().eq("id", id);
    
    if (error) {
      return rejectWithValue(error.message || "No se pudo eliminar la publicación.");
    }
    
    return id;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsByUser.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchPostsByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al cargar las publicaciones";
      })
      .addCase(fetchAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.allPosts = action.payload; // Guardar en allPosts, no en items
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error al cargar las publicaciones";
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.items.push(action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<string>) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export default postsSlice.reducer;

