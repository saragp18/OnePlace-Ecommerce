import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


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
