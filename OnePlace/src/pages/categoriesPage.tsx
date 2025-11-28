import Categories from '../components/Categories.tsx';
import CategoriesBanner from '../components/CategoriesBanner.tsx';
import Footer from '../components/Footer.tsx';
import Inspire from '../components/InspireYou.tsx';
import Navbar from '../components/Navbar.tsx'

function CategoriesPage() {

  return (

    <div>
      <Navbar />
      <CategoriesBanner />
      <Categories />
      <Inspire />
      <Footer/>
    </div>
     
    
    


  
  )
}

export default CategoriesPage;
