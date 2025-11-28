import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { fetchPostsByUser, deletePost, type Post } from "../redux/postsSlice";

const UserListings: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.items);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const user = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    if (user?.id) dispatch(fetchPostsByUser(user.id));
  }, [dispatch, user]);

  const handleDelete = (id?: string) => {
    if (!id) return;
    if (window.confirm("¿Estás seguro de que quieres eliminar esta publicación?")) {
      dispatch(deletePost(id));
    }
  };

  if (loading) return <div className="p-6 md:p-10 flex-1">Cargando publicaciones...</div>;

  return (
    <div className="p-6 md:p-10 flex-1">
      <h2 className="text-xl font-semibold mb-4">Tus publicaciones</h2>
      {posts.length === 0 ? (
        <p className="text-gray-600">No tienes publicaciones aún.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post: Post) => (
            <li
              key={post.id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
            >
              {/* Imagen del producto */}
              <div className="flex-shrink-0">
                {post.imagen ? (
                  <img
                    src={post.imagen}
                    alt={post.nombre || "Producto"}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-lg"
                    onError={(e) => {
                      // Si la imagen falla al cargar, mostrar un placeholder
                      (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='14'%3ESin imagen%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ) : (
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs text-center px-2">Sin imagen</span>
                  </div>
                )}
              </div>

              {/* Información del producto */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-1">{post.nombre || "Publicación sin título"}</h3>
                {post.descripcion && (
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.descripcion}</p>
                )}
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  {post.precio && (
                    <p className="text-base font-bold text-gray-900">${post.precio}</p>
                  )}
                  {post.tipo && (
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                      {post.tipo}
                    </span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    post.disponible 
                      ? "bg-green-100 text-green-700" 
                      : "bg-red-100 text-red-700"
                  }`}>
                    {post.disponible ? "Disponible" : "No disponible"}
                  </span>
                </div>
              </div>

              {/* Botón de eliminar */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleDelete(post.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
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
