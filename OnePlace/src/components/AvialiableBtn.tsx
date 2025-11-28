/**
Componente Available.
Renderiza un botón con estilo que muestra el texto "Available".

Entradas:
No recibe parámetros.

Salidas:
Retorna un botón JSX estilizado con Tailwind CSS.
*/

function Available() {
  return (
    <button className="px-8 py-3 border border-gray-300 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all duration-300">
      Available
    </button>
    
  );
}

export default Available;