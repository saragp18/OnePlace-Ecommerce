/**
Función ProductName.
Muestra un campo de entrada de texto para que el usuario escriba el nombre del producto.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que contiene un input tipo texto
con estilo personalizado para ingresar el nombre del producto.
*/

function ProductName() {
  return (
    <>
    
    <input type='text' name='Product Name' placeholder="Product Name"  className="w-full max-w-sm px-4 py-2 bg-gray-200 rounded-xl border-none focus:outline-none shadow-inner"/>
    </>
            
      
  );
}

export default ProductName;