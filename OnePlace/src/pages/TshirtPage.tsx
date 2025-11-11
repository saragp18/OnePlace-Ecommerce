import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroShirtsPage from "../components/HeroShirtsPage";
import ProductsShirts from "../components/ProductsShirts";
import HeroTshirtsPage from "../components/HeroTshirtPage";
import ProductsTshirt from "../components/ProductTshirt";

function TshirtsPage() {
  return (

    <div>
        <Navbar />
        <HeroTshirtsPage/>
        <ProductsTshirt/>
        <Footer/>

    </div>
);
}

export default TshirtsPage;
