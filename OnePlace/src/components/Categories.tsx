import { NavLink } from "react-router-dom";

const categories = [
  { name: "WOMEN", image: "/img/Mujer.jpg" },
  { name: "MEN", image: "/img/Hombre.jpg" },
  { name: "JACKETS", image: "/img/JacketNegra.jpg" },
  { name: "JEANS", image: "/img/JeanGris.jpg" },
  { name: "SHIRTS", image: "/img/CamisaAzul.jpg" },
  { name: "T-SHIRTS", image: "/img/CamisetaRosa.jpg" },
  { name: "BERMUDA SHORTS", image: "/img/ShortJean.jpg" },
  { name: "SWEATERS", image: "/img/SacoAtelier.jpg" },
];

const Categories = () => {
  return (
    <section className="text-center py-16 bg-white">
      <h2 className="text-base tracking-[2px] mb-12 font-semibold text-gray-900">
        CATEGORIES
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className="relative group overflow-hidden rounded-3xl cursor-pointer"
          >
            <NavLink to="/categories">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </NavLink>

            <div
              className={`absolute ${
                index % 2 === 0 ? "bottom-0 left-0" : "bottom-0 right-0"
              } bg-white px-6 py-3 rounded-tl-2xl rounded-tr-2xl md:rounded-none md:rounded-tl-none md:rounded-tr-none md:rounded-br-none md:rounded-bl-none`}
            >
              <p className="text-base md:text-lg font-semibold tracking-widest text-gray-900">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-14 px-8 py-3 rounded-full bg-black text-white text-sm tracking-widest hover:bg-gray-500 transition-colors">
        LOAD MORE
      </button>
    </section>
  );
};

export default Categories;
