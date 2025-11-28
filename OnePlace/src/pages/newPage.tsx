// Importación de componentes
import Navbar from "../components/Navbar";
import HeroNewPage from "../components/HeroNewPage";
import NewItemsSection from "../components/NewItem";
import Footer from "../components/Footer";

function NewPage() {
  return (

    <div>
      {/* Barra de navegación */}
        <Navbar />
         {/* Sección principal / Hero de productos nuevos */}
        <HeroNewPage/>
        {/* Lista de productos nuevos */}
        <NewItemsSection />
        <Footer/>

    </div>
);
}

export default NewPage;
