import Logo from "/img/LOGO BOLSO 2.png";
import LookIcon from "/img/lupa.png";
import CartIcon from "/img/cart.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Navbar() {

  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.products.items);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id: number) => {
    navigate(`/product/${id}`);
    setSearch("");
  };

  return (
    <header className="relative w-full flex items-center justify-between px-4 sm:px-6 py-3">

      {/* LOGO */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img src={Logo} className="w-6 h-6 sm:w-8 sm:h-8" />
        <p className="text-base sm:text-lg font-light">ONEPLACE</p>
      </div>

      {/* MENU */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
        <NavLink to="/Home">HOME</NavLink>
        <NavLink to="/new">NEW</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
        <NavLink to="/moresells">MORE SELLS</NavLink>
        <NavLink to="/sell">SELL</NavLink>
      </nav>
      

      {/* CART */}
      <div className="flex space-x-3">

        <div className="relative">

        <div className="flex items-center border rounded-md px-2">
          <input
            type="text"
            value={search}
            placeholder="Search products..."
            onChange={(e) => setSearch(e.target.value)}
            className="outline-none text-sm px-2 py-1"
          />
          <img src={LookIcon} className="w-4 cursor-pointer" />
        </div>

        {search && filteredProducts.length > 0 && (
          <div className="absolute mt-1 w-full bg-white border rounded shadow-md z-50">
            {filteredProducts.slice(0, 5).map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelect(product.id)}
                className="cursor-pointer px-3 py-2 hover:bg-gray-200 text-sm"
              >
                {product.name}
              </div>
            ))}
          </div>
        )}

      </div>
        <NavLink to="/cart">
          <img src={CartIcon} className="w-5 cursor-pointer" />
        </NavLink>

        <NavLink to="/">
          <button>Login</button>
        </NavLink>
      </div>

    </header>
  );
}

export default Navbar;
