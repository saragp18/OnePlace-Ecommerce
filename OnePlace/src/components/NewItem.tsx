import { useEffect } from "react";
import products from "../data/products.json";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { fetchAllPosts, type Post } from "../redux/postsSlice";

const NewItemsSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.allPosts);
  const loading = useSelector((state: RootState) => state.posts.loading);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  // Productos estáticos del JSON (primeros 8)
  const staticProducts = products.filter((p) => p.id >= 1 && p.id <= 8);

  // Convertir posts a formato compatible para mostrar
  const userProducts = posts
    .filter((post) => post.disponible !== false) // Solo productos disponibles
    .map((post: Post) => ({
      id: `post-${post.id}`,
      name: post.nombre,
      price: `$${post.precio}`,
      image: post.imagen ? [post.imagen] : ["/img/placeholder.png"],
      tipo: post.tipo,
      isUserProduct: true as const,
      postData: post,
    }));

  // Combinar productos estáticos con productos de usuarios
  // Los productos de usuarios aparecen primero (más recientes)
  const allProducts = [
    ...userProducts,
    ...staticProducts.map((p) => ({
      ...p,
      isUserProduct: false as const,
      tipo: undefined,
      postData: undefined,
    })),
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-left tracking-wider">
        NEW PRODUCTS
      </h2>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Cargando productos...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
              onClick={() => {
                if (item.isUserProduct && 'postData' in item) {
                  // Para productos de usuarios, navegar con los datos del post
                  navigate("/Product/" + item.id, { state: item.postData });
                } else {
                  navigate("/product/" + item.id, { state: item.id });
                }
              }}
            >
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-full h-72 object-cover rounded-md mb-4"
                onError={(e) => {
                  // Si la imagen falla, mostrar un placeholder
                  (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Crect width='300' height='300' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af'%3ESin imagen%3C/text%3E%3C/svg%3E";
                }}
              />
              <h3 className="text-sm font-medium text-gray-700 uppercase">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{item.price}</p>
              {'tipo' in item && item.tipo && (
                <p className="text-xs text-gray-400 mt-1">{item.tipo}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NewItemsSection;
