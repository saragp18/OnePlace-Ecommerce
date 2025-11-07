import products from "../data/products.json";
import "../App.css";

const NewItemsSection = () => {
  const newProducts = products.filter((p) => p.id >= 1 && p.id <= 8);


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
          >
            <img
              src={item.image}
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
