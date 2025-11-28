import supabase from "./supabaseClient";

/**
Función registerUser.
Registra un nuevo usuario en Supabase usando correo y contraseña.

Entradas:
- gmail: string → correo electrónico del usuario.
- contraseña: string → contraseña del usuario.

Salidas:
Retorna el objeto `user` creado en Supabase o lanza un error si ocurre algún problema.
*/
export async function registerUser(gmail: string, contraseña: string) {
  const { data, error } = await supabase.auth.signUp({
    email: gmail,
    password: contraseña,
  });

  if (error) throw new Error(error.message);

  return data.user;
}

/**
Función loginUser.
Inicia sesión de un usuario existente en Supabase usando correo y contraseña.

Entradas:
- gmail: string → correo electrónico del usuario.
- contraseña: string → contraseña del usuario.

Salidas:
Retorna un objeto con el usuario `{ user }` si el inicio de sesión es exitoso,
o lanza un error en caso de que las credenciales sean incorrectas o ocurra algún problema.
*/
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