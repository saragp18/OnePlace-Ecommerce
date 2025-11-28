/**
Función ProductPrice.
Renderiza un campo de entrada de texto destinado a capturar el precio del producto.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que contiene un input tipo texto
para que el usuario ingrese el precio del producto.
*/

function ProductPrice() {
  return (
    <>
    
    <input type='text' name='Product Price' placeholder="Product price"  className="w-full max-w-sm px-4 py-2 bg-gray-200 rounded-xl border-none focus:outline-none shadow-inner"/>
    </>
            
      
  );
}

export default ProductPrice;