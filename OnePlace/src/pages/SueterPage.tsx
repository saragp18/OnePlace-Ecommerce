import Navbar from "../components/Navbar"; // Importa la barra de navegación
import Footer from "../components/Footer"; // Importa el footer
import HeroSweaterPage from "../components/HeroSweater"; // Importa el hero/banner para la categoría Sweaters
import ProductsSweater from "../components/ProductsSweater"; // Importa el componente con los productos (sweaters)

function SueterPage() {
  return (

    <div>
        <Navbar />
        <HeroSweaterPage/> {/* Banner principal de la página de suéteres */}
        <ProductsSweater/> {/* Lista de productos tipo suéter */}
        <Footer/>

    </div>
);
}

export default SueterPage;