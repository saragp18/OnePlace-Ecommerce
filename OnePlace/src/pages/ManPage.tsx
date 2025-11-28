// Importación de componentes
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryGrid from "../components/CategoryGrid";
import HeroManPage from "../components/HeroManPage";
import ProductsMan from "../components/ProductsMan";

function ManPage() {
  return (

    <div>
      {/* Barra de navegación */}
        <Navbar />
        {/* Sección principal del apartado de hombres */}
        <HeroManPage/>
        {/* Grid de categorías para la sección masculina */}
        <CategoryGrid />
        {/* Lista de productos para hombres */}
        <ProductsMan />
        <Footer/>

    </div>
);
}

export default ManPage;
