import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { Product as DataProduct } from "../type/type";

/**
Función Navbar.
Renderiza la barra de navegación principal del sitio, incluyendo enlaces, buscador,
logotipo y menú responsive para dispositivos móviles.

Entradas:
No recibe parámetros directamente.
Utiliza internamente:
- useState: para manejar el estado del menú móvil (isOpen) y la búsqueda (query).
- useSelector: para obtener la lista de productos desde Redux.
- useNavigate: para redirigir al usuario a la página de un producto al buscarlo.

Salidas:
Retorna un componente JSX que muestra:
- Navegación superior con logo y enlaces a distintas secciones.
- Barra de búsqueda con autocompletado basado en los nombres de productos.
- Icono del carrito.
- Menú desplegable en versión móvil.
Al ejecutar la búsqueda:
  - Si encuentra el producto, redirige a /Product/{id}.
  - Si no lo encuentra, muestra una alerta.
*/

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

 
  const products = useSelector((state: RootState) => state.products.items) as DataProduct[];

  
  const suggestions = products.map((p: DataProduct) => p.name);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    const product = products.find(
      (p) => p.name.toLowerCase() === query.toLowerCase()
    );

    if (product) {
      navigate(`/Product/${product.id}`, { state: product.id });
      setQuery("");
    } else {
      alert("Product not found");
    }
  };

  return (
    <>
      
      <style>
        {`
          input::-webkit-calendar-picker-indicator {
            display: none !important;
          }
        `}
      </style>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/img/LOGO BOLSO 2.png"
                alt="OnePlace Logo"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
              <p className="text-base sm:text-lg lg:text-xl font-light tracking-wide text-black">
                ONEPLACE
              </p>
            </div>

            <div className="hidden md:flex space-x-8 font-medium text-black-700">
              <NavLink to="/Home" className={" text-black hover:bg-gray-100 px-4 py-2 rounded"}>Home</NavLink>
              <NavLink to="/new" className={" text-black hover:bg-gray-100 px-4 py-2 rounded"}>New</NavLink>
              <NavLink to="/categories" className={" text-black hover:bg-gray-100 px-4 py-2 rounded"}>Categories</NavLink>
              <NavLink to="/moresells" className={"  text-black hover:bg-gray-100 px-4 py-2 rounded"}>More Sells</NavLink>
              <NavLink to="/sell" className={" text-black hover:bg-gray-100 px-4 py-2 rounded"}>Sell</NavLink>
              <NavLink to="/user" className={" text-black hover:bg-gray-100 px-4 py-2 rounded"}>User</NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-6">

              
              <form onSubmit={handleSearch} className="relative">
                <input
                  list="productSuggestions"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border rounded-full px-4 py-1 text-sm"
                  placeholder="Search..."
                />

                <datalist id="productSuggestions">
                  {suggestions.map((name, index) => (
                    <option key={index} value={name} />
                  ))}
                </datalist>

                <button type="submit">
                  <img
                    src="/img/lupa.png"
                    className="w-5 h-5 absolute right-2 top-1"
                  />
                </button>
              </form>

              <NavLink to="/cart">
                <img src="/img/Carrito.png" className="w-6 h-6" />
              </NavLink>

            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <img src="/img/Lupa.svg" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col space-y-2">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/new">New</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/moresells">More Sells</NavLink>
            <NavLink to="/sell">Sell</NavLink>
            <NavLink to="/user">User</NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
