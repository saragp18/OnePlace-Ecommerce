import supabase from './supabaseClient';

export interface Users {
    id: string;
    nombre: string;
    gmail: string;
    contraseña: string;
}

/**
Función postUserData.
Inserta o actualiza los datos de un usuario en la tabla "User" de Supabase.

Entradas:
- id: string → ID único del usuario.
- gmail: string → correo electrónico del usuario.

Salidas:
Retorna el registro del usuario insertado o actualizado en Supabase.
Lanza un error si ocurre algún problema durante la operación.
*/
export async function postUserData(gmail: string) {

    const { data, error } = await supabase
        .from('User')
        .insert({gmail:gmail})
        .select()
    if (error) {
        console.error('Error inserting user data:', error);
        throw error;
    } else {
        console.log('User data inserted successfully:', data);
        return data;
    }
}