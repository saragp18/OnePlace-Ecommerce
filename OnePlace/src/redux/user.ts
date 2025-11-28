/**
Interfaz User.
Define la estructura de un usuario en la aplicación, incluyendo
id, nombre, correo electrónico y número de teléfono.
*/

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}