/**
Función SaveBtn.
Renderiza un botón destinado a guardar la información ingresada por el usuario.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que muestra un botón con estilos predefinidos,
el cual representa la acción de guardar dentro de la interfaz.
*/

function SaveBtn() {
  return (
    <button
  className="w-full md:w-48 bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
>
  Save
</button>

  );
}

export default SaveBtn;