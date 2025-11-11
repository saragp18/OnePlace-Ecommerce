import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroWomanPage from "../components/HeroWomanPage";
import CategoryGridWoman from "../components/CategoryGridWoman";
import ProductsWoman from "../components/ProductsWoman";

function WomanPage() {
  return (

    <div>
        <Navbar />
        <HeroWomanPage/>
        <CategoryGridWoman />
        <ProductsWoman />
        <Footer/>

    </div>
);
}

export default WomanPage;
