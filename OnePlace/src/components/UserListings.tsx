import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { fetchListingsByUser, deleteListing } from "../redux/listingsSlice";

/**
Función UserListings.
Renderiza todas las publicaciones de productos creadas por el usuario actual,
permitiendo visualizar nombre, descripción, precio y eliminar cada publicación.

Entradas:
No recibe parámetros. Obtiene los datos del usuario y las publicaciones
directamente del store de Redux.

Salidas:
Retorna un componente JSX que muestra:
- Un título indicando "Tus publicaciones"
- Mensaje de carga mientras se obtienen los datos
- Lista de publicaciones del usuario (nombre, descripción, precio)
- Botón para eliminar cada publicación individual
- Mensaje si el usuario no tiene publicaciones
*/
const UserListings: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const listings = useSelector((state: RootState) => state.listings.items);
  const loading = useSelector((state: RootState) => state.listings.loading);
  const user = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    if (user?.id) dispatch(fetchListingsByUser(user.id));
  }, [dispatch, user]);

  const handleDelete = (id?: number) => {
    if (!id) return;
    dispatch(deleteListing(id));
  };

  if (loading) return <div>Cargando publicaciones...</div>;

  return (
    <div className="p-6 md:p-10 flex-1">
      <h2 className="text-xl font-semibold mb-4">Tus publicaciones</h2>
      {listings.length === 0 ? (
        <p className="text-gray-600">No tienes publicaciones aún.</p>
      ) : (
        <ul className="space-y-4">
          {listings.map((l) => (
            <li
              key={l.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <div>
                <h3 className="font-semibold">{l.name}</h3>
                <p className="text-sm text-gray-600">{l.description}</p>
                <p className="text-sm font-medium mt-1">${l.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDelete(l.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserListings;
