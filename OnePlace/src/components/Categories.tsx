import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-base tracking-[2px] mb-12 font-semibold text-gray-900">
        CATEGORIES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 max-w-6xl mx-auto">
        
        <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
          <NavLink to="/women">
            <img
              src="/img/Mujer.jpg"
              alt="WOMEN"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>
          <div className="absolute bottom-0 left-0 bg-white px-6 py-3 rounded-tl-2xl rounded-tr-2xl md:rounded-none">
            <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
              WOMEN
            </p>
          </div>
        </div>

        
        <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
          <NavLink to="/men">
            <img
              src="/img/Hombre.jpg"
              alt="MEN"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>
          <div className="absolute bottom-0 right-0 bg-white px-6 py-3 md:rounded-none">
            <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
              MEN
            </p>
          </div>
        </div>

        
        <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
          <NavLink to="/jackets">
            <img
              src="/img/JacketNegra.jpg"
              alt="JACKETS"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>
          <div className="absolute bottom-0 left-0 bg-white px-6 py-3 md:rounded-none">
            <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
              JACKETS
            </p>
          </div>
        </div>

        
        <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
          <NavLink to="/jeans">
            <img
              src="/img/JeanGris.jpg"
              alt="JEANS"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>
          <div className="absolute bottom-0 right-0 bg-white px-6 py-3 md:rounded-none">
            <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
              JEANS
            </p>
          </div>
        </div>

        
        <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
          <NavLink to="/shirts">
            <img
              src="/img/CamisaAzul.jpg"
              alt="SHIRTS"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>
          <div className="absolute bottom-0 left-0 bg-white px-6 py-3 md:rounded-none">
            <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
              SHIRTS
            </p>
          </div>
        </div>

        
        <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
          <NavLink to="/t-shirts">
            <img
              src="/img/CamisetaRosa.jpg"
              alt="T-SHIRTS"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>
          <div className="absolute bottom-0 right-0 bg-white px-6 py-3 md:rounded-none">
            <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
              T-SHIRTS
            </p>
          </div>
        </div>

        
        <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
          <NavLink to="/bermudas">
            <img
              src="/img/ShortJean.jpg"
              alt="BERMUDA SHORTS"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>
          <div className="absolute bottom-0 left-0 bg-white px-6 py-3 md:rounded-none">
            <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
              BERMUDA SHORTS
            </p>
          </div>
        </div>

        
        <div className="relative group overflow-hidden rounded-3xl cursor-pointer">
          <NavLink to="/sweaters">
            <img
              src="/img/SacoAtelier.jpg"
              alt="SWEATERS"
              className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </NavLink>
          <div className="absolute bottom-0 right-0 bg-white px-6 py-3 md:rounded-none">
            <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
              SWEATERS
            </p>
          </div>
        </div>
      </div>

      <button className="mt-14 px-8 py-3 rounded-full bg-black text-white text-sm tracking-widest hover:bg-gray-500 transition-colors">
        LOAD MORE
      </button>
    </section>
  );
};

export default Categories;
