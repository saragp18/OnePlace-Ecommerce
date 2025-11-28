
/**
Función UploadImg.
Renderiza un botón destinado a subir una imagen dentro de la interfaz de usuario.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que muestra un botón con estilos predefinidos,
el cual representa la acción de subir una imagen.
*/

function UploadImg() {
  return (
    <button
  className="w-full bg-gray-300 text-black font-semibold py-3 rounded-md hover:bg-gray-400 transition-colors duration-300"
>
  Upload Image
</button>

  );
}

export default UploadImg;