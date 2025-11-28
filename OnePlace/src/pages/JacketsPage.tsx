// Importación de componentes
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsJackets from "../components/ProductsJackets";
import HeroJacketsPage from "../components/HeroJacketsPage";

function JacketsPage() {
  return (

    <div>
        <Navbar />
        <HeroJacketsPage/>
        <ProductsJackets />
        <Footer/>

    </div>
);
}

export default JacketsPage;
