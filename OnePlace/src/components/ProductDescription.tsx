/**
Función ProductDes.
Renderiza un campo de entrada de texto destinado a capturar la descripción
de un producto.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que contiene un input estilizado con el placeholder
"Product Description".
*/

function ProductDes() {
  return (
    <>
    
    <input type='text' name='Product description' placeholder="Product Description"  className="w-full max-w-sm px-4 py-2 bg-gray-200 rounded-xl border-none focus:outline-none shadow-inner"/>
    </>
            
      
  );
}

export default ProductDes;