import { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import type { AppDispatch } from '../redux/store';
import { useLocation } from 'react-router-dom';
import type { Product } from '../type/type';
import product from "../data/products.json"
import ProductDetailPage from '../components/DetailProductSection';

function DetailProductPage() {
  const location = useLocation()
  const [item, setitem] = useState<Product>()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    function getitem() {
      const itemid = location.state
      const itemfinded:any = product.find((jsonitem) => Number(jsonitem.id) === Number(itemid))
      setitem(itemfinded)


    }
    getitem()
  }, [location.state])

  const handleAddToCart = () => {
    if (!item) return;

    const imageString = Array.isArray(item.image) ? item.image[0] || "" : (item.image as unknown as string) || "";

    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: imageString,
        color: item.color,
        quantity: 1,
      })
    );
  }

  return (
    <>
      <Navbar/>
      <ProductDetailPage
        onclick={handleAddToCart}
        name={item?.name || ""}
        price={item?.price || ""}
        color={item?.color || ""}
        sizes={item?.sizes || []}
        description={item?.description || ""}
        materials={item?.materials || []}
        images={item?.image || []}
      />
      <Footer/>
    
    


    </>
  )
}

export default DetailProductPage;
