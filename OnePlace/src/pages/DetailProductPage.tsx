import { useEffect, useState } from 'react';
import ProductDetailPage from '../components/DetailProduct';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom';
import type { Product } from '../type/type';
import product from "../data/products.json"

function DetailProductPage() {
  const location = useLocation()
  const [item, setitem] = useState<Product>()

  useEffect(() => {
    function getitem() {
      const itemid = location.state
      const itemfinded:any = product.find((jsonitem) => Number(jsonitem.id) === Number(itemid))
      setitem(itemfinded)


    }
    getitem()
  })

  return (
    <>
      <Navbar/>
      <ProductDetailPage name={item?.name || ""} price={item?.price || ""} color={item?.color || ""} sizes={item?.sizes || []} description={item?.description || ""} materials={item?.materials || []} images={item?.image || []}   />
      <Footer/>
    
    


    </>
  )
}

export default DetailProductPage;
