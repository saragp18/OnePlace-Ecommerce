import Navbar from "../components/Navbar"; // Importa la barra de navegación superior
import Footer from "../components/Footer"; // Importa el footer de la página
import HeroShortPage from "../components/HeroShortPage"; // Importa el hero/banner de la categoría Shorts
import ProductsShort from "../components/ProductsShort"; // Importa la lista de productos (shorts)

function ShortPage() {
  return (

    <div>
        <Navbar /> {/* Muestra el menú de navegación arriba */}
        <HeroShortPage/> {/* Sección hero con imagen o título principal de Shorts */}
        <ProductsShort/> {/* Componente que muestra los productos tipo short */}
        <Footer/> {/* Footer al final de la página */}

    </div>
);
}

export default ShortPage; // Exporta la página para poder usarla en las rutas
