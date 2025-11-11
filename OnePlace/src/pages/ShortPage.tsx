import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductsTshirt from "../components/ProductTshirt";
import HeroShortPage from "../components/HeroShortPage";
import ProductsShort from "../components/ProductsShort";

function ShortPage() {
  return (

    <div>
        <Navbar />
        <HeroShortPage/>
        <ProductsShort/>
        <Footer/>

    </div>
);
}

export default ShortPage;
