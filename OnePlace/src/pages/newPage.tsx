import Navbar from "../components/Navbar";
import HeroNewPage from "../components/HeroNewPage";
import NewItemsSection from "../components/NewItem";
import Footer from "../components/Footer";

function NewPage() {
  return (

    <div>
        <Navbar />
        <HeroNewPage/>
        <NewItemsSection />
        <Footer/>

    </div>
);
}

export default NewPage;
