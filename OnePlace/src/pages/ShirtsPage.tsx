import Navbar from "../components/Navbar"; // Barra de navegación
import Footer from "../components/Footer"; // Footer de la página

import HeroShirtsPage from "../components/HeroShirtsPage"; // Sección principal (hero)
import ProductsShirts from "../components/ProductsShirts"; // Lista de productos tipo jean


function ShirtsPage() {
  return (

    <div>
        <Navbar />  {/* Navbar visible arriba */}
        <HeroShirtsPage/>  {/* Hero de la sección camisas */}
        <ProductsShirts />  {/* Lista de camisas */}
        <Footer/>  {/* Footer de la página */}

    </div>
);
}

export default ShirtsPage; // Exportación de la página
