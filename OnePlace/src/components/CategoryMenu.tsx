/**
Función CategoryMenu.
Renderiza un menú de categorías en forma de cuadrícula con diferentes botones
que representan tipos de productos disponibles.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que muestra una cuadrícula de botones interactivos
correspondientes a distintas categorías como Women, Men, Jackets, Jeans, entre otras.
*/
function CategoryMenu() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl grid grid-cols-2 gap-2">
      <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
        Women
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
        Men
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
        Jackets
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
        Jeans
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
        Shirts
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
        T-Shirts
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
        Bermuda Shorts
      </button>

      <button className="px-4 py-2 rounded-full bg-white text-gray-800 font-medium text-sm shadow-sm hover:bg-gray-900 hover:text-white transition-all duration-300">
        Sweaters
      </button>
    </div>
  );
}

export default CategoryMenu;


