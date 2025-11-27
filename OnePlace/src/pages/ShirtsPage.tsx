import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroShirtsPage from "../components/HeroShirtsPage";
import ProductsShirts from "../components/ProductsShirts";

function ShirtsPage() {
  return (

    <div>
        <Navbar />
        <HeroShirtsPage/>
        <ProductsShirts />
        <Footer/>

    </div>
);
}

export default ShirtsPage;
