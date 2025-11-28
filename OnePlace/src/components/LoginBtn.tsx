/**
Función Login.
Renderiza un botón estilizado que permite al usuario iniciar sesión en la aplicación.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que muestra un botón con estilos interactivos para la acción "Log In".
*/

function Login() {
  return (
    <button className="px-8 py-3 border border-gray-300 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all duration-300">
      Log In
    </button>
  );
}

export default Login;