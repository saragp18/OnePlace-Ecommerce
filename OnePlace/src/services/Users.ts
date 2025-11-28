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
export async function postUserData(id: string, gmail: string) {
    const { data, error } = await supabase
        .from('User')
        .upsert({ id: id, gmail: gmail }, { onConflict: 'id' })
        .select()
        .maybeSingle();

    if (error) {
        console.error('Error upserting user data:', error);
        throw error;
    }

    console.log('User data upserted successfully:', data);
    return data;
}