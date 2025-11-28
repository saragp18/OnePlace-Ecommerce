// Importación de componentes
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroMoresells from "../components/HeroMoreSells";
import ProductsMoresells from "../components/ProductsMoresells";

function Moresellspage() {
  return (

    <div>
      {/* Barra de navegación */}
        <Navbar />
         {/* Sección principal / Hero de más vendidos */}
        <HeroMoresells/>
        {/* Lista de productos más vendidos */}
        <ProductsMoresells/>
         {/* Pie de página */}
        <Footer/>

    </div>
);
}

export default Moresellspage;
