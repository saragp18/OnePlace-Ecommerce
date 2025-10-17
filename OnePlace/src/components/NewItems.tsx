function NewItems() {
  const items = [
    {
      id: 1,
      name: "Wide High Ankle Jeans",
      image: "/img/JeanItems.jpg",
    },
    {
      id: 2,
      name: "Short leather-effect jacket with pockets",
      image: "/img/JacketItem.jpg",
    },
    {
      id: 3,
      name: "Short-sleeved print T-shirt",
      image: "/img/CamisetaItems.jpg",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      {/* Encabezado */}
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
        {/* FILTRO */}
        <div className="flex items-center gap-2 text-sm">
          <img
            src="/img/Filtro.jpg"
            alt="Filter icon"
            className="w-4 h-4"
          />
          <span className="font-light tracking-wide">FILTER</span>
        </div>

        {/* Título */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">NEW ITEMS</h2>
          <button className="text-sm underline text-gray-700 mt-1">
            SEE ALL
          </button>
        </div>

        {/* CARACTERÍSTICAS */}
        <span className="text-sm font-light tracking-wide">
          CHARACTERISTICS
        </span>
      </div>

      {/* Cards */}
      <div className="mt-10 flex justify-center gap-6 flex-wrap px-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-72 bg-gray-50 rounded-xl border border-gray-200 p-6 flex flex-col items-center transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-60 h-72 object-contain"
            />
            <h3 className="text-base font-medium text-gray-800 text-center mt-4">
              {item.name}
            </h3>
            <button className="mt-2 text-xs underline text-gray-700 hover:text-black">
              VIEW
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewItems;