import Navbar from "../components/Navbar"; // Importa la barra de navegación
import Footer from "../components/Footer"; // Importa el footer


import HeroTshirtsPage from "../components/HeroTshirtPage"; // Importa el hero/banner de camisetas
import ProductsTshirt from "../components/ProductTshirt"; // Importa la lista de productos de camisetas

function TshirtsPage() {
  return (

    <div>
        <Navbar />
        <HeroTshirtsPage/> {/* Banner principal de la página de camisetas */}
        <ProductsTshirt/> {/* Lista de productos tipo camiseta */}
        <Footer/>

    </div>
);
}

export default TshirtsPage; // Exporta la página para usarla en las rutas
