/**
Función Register.
Renderiza un botón destinado a la acción de registro dentro de la interfaz.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que muestra un botón con estilos predefinidos,
el cual representa la acción de registro para el usuario.
*/
function Register() {
  return (
    
    <button className="px-8 py-3 border border-gray-300 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all duration-300">
      Register
    </button>
  );
}

export default Register;
