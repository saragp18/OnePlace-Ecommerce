/**
Función NotAvailable.
Renderiza un botón estilizado que indica que una funcionalidad, producto o acción
no está disponible actualmente.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que muestra un botón con estilos hover y texto
"Not Available".
*/

function NotAvailable() {
  return (
    <button className="px-8 py-3 border border-gray-300 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-800 hover:text-white transition-all duration-300">
       Not Available
    </button>
    
  );
}

export default NotAvailable;