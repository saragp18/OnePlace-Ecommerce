import CartComponent from '../components/CartSection.tsx';
import CategoryGrid from '../components/CategoryGrid.tsx';
import Footer from '../components/Footer.tsx';
import Navbar from '../components/Navbar.tsx'

function CartPage() {

  return (

    <div>
      <Navbar />
      <CartComponent/>
      <CategoryGrid/>
      <Footer/>
    </div>
     
    
    


  
  )
}

export default CartPage;
