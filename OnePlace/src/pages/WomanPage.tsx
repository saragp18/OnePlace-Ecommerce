import Navbar from "../components/Navbar"; // Barra de navegación principal
import Footer from "../components/Footer"; // Footer de la página

import HeroWomanPage from "../components/HeroWomanPage"; // Sección hero para la página de mujeres
import CategoryGridWoman from "../components/CategoryGridWoman"; // Grid con categorías para mujer
import ProductsWoman from "../components/ProductsWoman"; // Lista de productos para mujer

function WomanPage() {
  return (

    <div>
        <Navbar /> {/* Navbar visible arriba */}
        <HeroWomanPage/> {/* Imagen grande o banner principal */}
        <CategoryGridWoman /> {/* Categorías especiales para mujer */}
        <ProductsWoman /> {/* Productos de la sección mujer */}
        <Footer/>

    </div>
);
}

export default WomanPage;
