  import categories from "../data/products.json"
  function CategoryGrid(){

  const CategoriesProduct = categories.filter((p) => p.id >= 18 && p.id <= 22);

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {CategoriesProduct.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-center"
          >
            <div className="w-full aspect-square bg-white rounded-lg shadow overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-4 text-sm font-semibold text-gray-700 uppercase">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;