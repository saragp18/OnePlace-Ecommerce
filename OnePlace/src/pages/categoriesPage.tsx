import Categories from '../components/Categories.tsx';
import CategoriesBanner from '../components/CategoriesBanner.tsx';
import Footer from '../components/Footer.tsx';
import Inspire from '../components/InspireYou.tsx';
import Navbar from '../components/Navbar.tsx'

function CategoriesPage() {

  return (

    <div>
      {/* Barra de navegación superior */}
      <Navbar />
      {/* Banner principal de categorías */}
      <CategoriesBanner />
      {/* Sección con las categorías disponibles */}
      <Categories />
      {/* Sección de inspiración para el usuario */}
      <Inspire />
      <Footer/>
    </div>
     
    
    


  
  )
}

export default CategoriesPage;
