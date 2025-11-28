// Importación de componentes
import Categories from '../components/Categories.tsx'
import CreateYourStyle from '../components/CreateYourStyle.tsx'
import Footer from '../components/Footer.tsx'
import Hero from '../components/Hero.tsx'
import NewItems from '../components/NewItems.tsx'

function Home() {

  return (

    <div>
      {/* Sección principal del homepage */}
      <Hero />
      <NewItems/>
      <Categories />
      <CreateYourStyle />
      <Footer/>
    </div>
     
    
    


  
  )
}

export default Home;
