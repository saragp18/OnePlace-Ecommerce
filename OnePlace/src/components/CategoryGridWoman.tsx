  import categories from "../data/products.json"
  
  /**
Función CategoryGridWoman.
Filtra un conjunto específico de productos desde el archivo products.json y renderiza una
cuadrícula visual con sus imágenes y nombres correspondientes a la categoría de mujer.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que muestra una cuadrícula de categorías compuestas por
imagen y nombre para los productos cuyo id está entre 78 y 82.
*/
  function CategoryGridWoman(){

  const CategoriesProduct = categories.filter((p) => p.id >= 78 && p.id <= 82);

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
                src={category.image[0]}
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

export default CategoryGridWoman;