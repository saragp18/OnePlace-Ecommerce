import Logo from "/img/LOGO BOLSO 2.png";
import LookIcon from "/img/lupa.png";
import CartIcon from "/img/cart.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="relative w-full flex items-center justify-between px-4 sm:px-6 py-3">
      
      <div className="flex items-center space-x-2 sm:space-x-3">
        <img
          src={Logo}
          alt="OnePlace Logo"
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
        />
        <p className="text-base sm:text-lg lg:text-xl font-light tracking-wide text-black">
          ONEPLACE
        </p>
      </div>

      
      <nav
        className="
          absolute left-1/2 transform -translate-x-1/2
          flex space-x-3 sm:space-x-5
          text-xs sm:text-sm lg:text-base font-medium text-gray-800
        "
      >
        <NavLink to={"/"}>
          <button className="hover:bg-gray-100 px-2 sm:px-3 py-1 rounded-md transition-colors">
            HOME
          </button>
        </NavLink>

        <NavLink to="/new">
        <button className="hover:bg-gray-100 px-2 sm:px-3 py-1 rounded-md transition-colors cursor-pointer">
          NEW
        </button>
        </NavLink>

        <NavLink to="/categories">
        <button className="hover:bg-gray-100 px-2 sm:px-3 py-1 rounded-md transition-colors">
          CATEGORIES
        </button>
        </NavLink>

        <NavLink to="/moresells">
        <button className="hover:bg-gray-100 px-2 sm:px-3 py-1 rounded-md transition-colors">
          MORE SELLS
        </button>
        </NavLink>

        <NavLink to="/sell">
        <button className="hover:bg-gray-100 px-2 sm:px-3 py-1 rounded-md transition-colors">
          SELL
        </button>
        </NavLink>
      </nav>

      
      <div className="flex items-center space-x-3 sm:space-x-4">
        <button className="flex items-center space-x-2 hover:bg-gray-100 px-2 sm:px-3 py-1 rounded-md transition-colors">
          <span>Look for</span>
          <img
            src={LookIcon}
            alt="Look Icon"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          />
        </button>
        <button className="flex items-center space-x-2 hover:bg-gray-100 px-2 sm:px-3 py-1 rounded-md transition-colors">
          <span>Cart</span>
          <img
            src={CartIcon}
            alt="Cart Icon"
            className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
          />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
