import supabase from './supabaseClient';

export interface Users {
    id: string;
    nombre: string;
    gmail: string;
    contraseña: string;
}

export async function postUserData(id: string, gmail: string) {

    const { data, error } = await supabase
        .from('User')
        .insert({ id: id, gmail: gmail })
        .select()
    if (error) {
        console.error('Error inserting user data:', error);
        throw error;
    } else {
        console.log('User data inserted successfully:', data);
        return data;
    }
}