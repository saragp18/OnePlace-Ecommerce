import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryGrid from "../components/CategoryGrid";
import HeroManPage from "../components/HeroManPage";
import ProductsMan from "../components/ProductsMan";

function ManPage() {
  return (

    <div>
        <Navbar />
        <HeroManPage/>
        <CategoryGrid />
        <ProductsMan />
        <Footer/>

    </div>
);
}

export default ManPage;
