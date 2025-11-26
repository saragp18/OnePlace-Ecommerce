import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { Product as DataProduct } from "../type/type";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // ✅ Productos desde Redux
  const products = useSelector((state: RootState) => state.products.items) as DataProduct[];

  // ✅ Extraer los nombres
  const suggestions = products.map((p: DataProduct) => p.name);

  // ✅ Buscar producto y navegar por ID
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
      {/* OCULTAR ICONO DEL DATALIST */}
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

            <NavLink to="/Home">
              <img src="/img/LOGO BOLSO 2.png" alt="Logo" className="h-10 w-auto" />
            </NavLink>

            <div className="hidden md:flex space-x-8 font-medium text-gray-700">
              <NavLink to="/Home">Home</NavLink>
              <NavLink to="/new">New</NavLink>
              <NavLink to="/categories">Categories</NavLink>
              <NavLink to="/moresells">More Sells</NavLink>
              <NavLink to="/sell">Sell</NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-6">

              {/* 🔍 SEARCH */}
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
                    src="/img/Lupa.svg"
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

        {/* Mobile */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col space-y-2">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/new">New</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/moresells">More Sells</NavLink>
            <NavLink to="/sell">Sell</NavLink>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
