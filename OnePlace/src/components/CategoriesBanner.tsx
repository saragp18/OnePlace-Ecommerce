/**
Función CategoriesBanner.
Renderiza un banner en la parte superior de la sección de categorías, mostrando una imagen de fondo
y un título centrado.

Entradas:
No recibe parámetros.

Salidas:
Retorna un componente JSX que muestra un banner con imagen de fondo y el texto "CATEGORIES".
*/
function CategoriesBanner() {
  return (
    <section
      className="relative w-full h-[300px] md:h-[800px] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: "url('/img/CategoriesHero.jpg')" }}
    >
     
      <div className="absolute inset-0 bg-opacity-60"></div>

      <h2 className="text-black bg-white py-12 px-150 text-4xl md:text-9xl font-Inter tracking-[6px]">
        CATEGORIES
      </h2>
    </section>
  );
}

export default CategoriesBanner;
