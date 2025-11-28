import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import LogOut from "./LogOutBtn";

/**
Función UserInfo.
Renderiza la información del usuario actualmente autenticado,
mostrando nombre, email, teléfono y un botón para cerrar sesión.

Entradas:
No recibe parámetros. Obtiene los datos del usuario, estado de carga y errores
directamente del store de Redux.

Salidas:
Retorna un componente JSX que muestra:
- Nombre o email del usuario (o un mensaje si no se encuentra)
- Teléfono y correo electrónico
- Mensaje de error si ocurre algún problema
- Botón para cerrar sesión (LogOut)
*/

function UserInfo() {
  const user = useSelector((state: RootState) => state.user.data);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  return (
    <div
      className="
          w-full md:w-fit 
          bg-gray-200 
          p-6 md:p-10 
          flex flex-col 
          md:min-h-full
        "
    >
      <h1 className="text-2xl font-semibold text-gray-800">
        {loading ? "Cargando..." : user?.name || user?.email || "Usuario no encontrado"}
      </h1>

      {error && (
        <p className="text-sm text-red-600 mt-2">Error: {error}</p>
      )}

      <div className="mt-4 space-y-1 text-gray-700">
        <h2>{user?.phone || ""}</h2>
        <h2>{user?.email || ""}</h2>
      </div>

      <div className="mt-8">
        <LogOut />
      </div>
    </div>
  );
}

export default UserInfo;