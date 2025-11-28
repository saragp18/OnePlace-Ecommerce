import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as logoutAction } from "../type/userSlice";
import type { AppDispatch } from "../redux/store";

/**
Función LogOut.
Renderiza un botón que permite cerrar la sesión del usuario y limpiar su información almacenada.

Entradas:
No recibe parámetros directamente.
Utiliza internamente:
- dispatch (useDispatch): para enviar la acción logout al store Redux.
- navigate (useNavigate): para redirigir al usuario después del cierre de sesión.

Salidas:
Retorna un componente JSX que muestra un botón de cierre de sesión.  
Al hacer clic se ejecuta:
  - Eliminación del "userId" del localStorage.
  - Dispatch de la acción logout.
  - Redirección a la ruta raíz ("/").
*/

function LogOut() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear local storage and redux user state
    localStorage.removeItem("userId");
    dispatch(logoutAction());
    navigate("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="px-8 py-3 border border-gray-300 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all duration-300"
    >
      Log Out
    </button>
  );
}

export default LogOut;