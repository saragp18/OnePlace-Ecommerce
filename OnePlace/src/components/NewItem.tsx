import products from "../data/products.json";
import "../App.css";
import { useNavigate } from "react-router-dom";

/**
Función NewItemsSection.
Filtra un conjunto específico de productos desde el archivo products.json y renderiza
una cuadrícula visual con sus imágenes, nombres y precios. Permite navegar al detalle
del producto al hacer clic.

Entradas:
No recibe parámetros.
Utiliza internamente:
- products.json para obtener los datos.
- useNavigate para redirigir a la página del producto seleccionado.

Salidas:
Retorna un componente JSX que muestra una sección titulada "NEW PRODUCTS" y una
cuadrícula con los productos cuyo id está entre 1 y 8. Cada tarjeta incluye imagen,
nombre y precio. Al hacer clic en un producto, navega a /product/{id}.
*/
const NewItemsSection = () => {
  const newProducts = products.filter((p) => p.id >= 1 && p.id <= 8);
  const navigate = useNavigate();


  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-left tracking-wider">
        NEW PRODUCTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newProducts.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            onClick={() => navigate("/product/" + item.id, { state: item.id })}
          >
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-sm font-medium text-gray-700 uppercase">
              {item.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewItemsSection;
