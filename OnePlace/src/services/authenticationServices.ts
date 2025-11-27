import supabase from "./supabaseClient";

export async function registerUser(gmail: string, contraseña: string) {
  const { data, error } = await supabase.auth.signUp({
    email: gmail,
    password: contraseña,
  });

  if (error) throw new Error(error.message);

  return data.user;
}

export async function loginUser(gmail: string, contraseña: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: gmail,
    password: contraseña,
  });

  if (error) {
    throw new Error(error.message || "Correo o contraseña incorrectos.");
  }

  return { user: data.user };
}