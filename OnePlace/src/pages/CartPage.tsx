import CartComponent from '../components/CartSection.tsx';
import Footer from '../components/Footer.tsx';
import Navbar from '../components/Navbar.tsx'

function CartPage() {

  return (

    <div>
      {/* Barra de navegación superior */}
      <Navbar />
      {/* Sección principal del carrito */}
      <CartComponent/>
      
      <Footer/>
    </div>
     
    
    


  
  )
}

export default CartPage;
