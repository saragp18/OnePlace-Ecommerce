import { useLocation } from "react-router-dom";
import ProductDetailPage from "../components/DetailProductSection";
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react";
import type { Product } from "../type/type";
import products from "../data/products.json"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Footer from "../components/Footer";


function DetailProduct() {
const location = useLocation()
  const [item, setitem] = useState<Product>()
  const dispatch = useDispatch()

  useEffect(() => {
    function getitem() {
      const itemid = location.state
      const itemfinded:any = products.find((jsonitem) => Number(jsonitem.id) === Number(itemid))
      setitem(itemfinded)


    }
    getitem()
  })
  return (
    <>
      <Navbar/>
      <ProductDetailPage onclick={() => { 
        console.log("aosijd");
        
        dispatch(addToCart(item))}} name={item?.name||""}price={item?.price||""}color={item?.color||""}sizes={item?.sizes||[]}description={item?.description||""}materials={item?.materials||[]}images={item?.image||[]}/>
        <Footer/>

    
    


    </>
  )
}

export default DetailProduct;
