import { useEffect, useState } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import type { AppDispatch } from '../redux/store';
import { useLocation, useParams } from 'react-router-dom';
import type { Product } from '../type/type';
import type { Post } from '../redux/postsSlice';
import product from "../data/products.json"
import ProductDetailPage from '../components/DetailProductSection';

function DetailProductPage() {
  const location = useLocation()
  const { id } = useParams()
  const [item, setitem] = useState<Product | null>(null)
  const [postItem, setPostItem] = useState<Post | null>(null)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    function getitem() {
      // Si location.state es un Post (producto de usuario)
      if (location.state && typeof location.state === 'object' && 'nombre' in location.state) {
        const post = location.state as Post;
        setPostItem(post);
        setitem(null);
        return;
      }

      // Si es un ID numérico, buscar en productos estáticos
      const itemid = location.state || id;
      if (itemid) {
        const itemfinded: any = product.find((jsonitem) => Number(jsonitem.id) === Number(itemid));
        if (itemfinded) {
          setitem(itemfinded);
          setPostItem(null);
        }
      }
    }
    getitem()
  }, [location.state, id])

  const handleAddToCart = () => {
    if (postItem) {
      // Agregar post de usuario al carrito
      const imageString = postItem.imagen || "";
      const numericPrice = typeof postItem.precio === "number" 
        ? postItem.precio 
        : parseFloat(String(postItem.precio).replace(/[^0-9.-]+/g, "")) || 0;

      dispatch(
        addToCart({
          id: Number(postItem.id?.replace(/\D/g, "")) || 0, // Convertir UUID a número
          name: postItem.nombre,
          price: numericPrice,
          image: imageString,
          color: postItem.tipo || "",
          quantity: 1,
        })
      );
      return;
    }

    if (!item) return;

    const imageString = Array.isArray(item.image) ? item.image[0] || "" : (item.image as unknown as string) || "";

    const numericPrice = typeof item.price === "number" ? item.price : parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) || 0;

    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: numericPrice,
        image: imageString,
        color: item.color,
        quantity: 1,
      })
    );
  }

  // Si es un post de usuario, mostrar sus datos
  if (postItem) {
    return (
      <>
        <Navbar/>
        <ProductDetailPage
          onclick={handleAddToCart}
          name={postItem.nombre || ""}
          price={`$${postItem.precio}` || ""}
          color={postItem.tipo || ""}
          sizes={[]} // Los posts no tienen tallas por ahora
          description={postItem.descripcion || ""}
          materials={[]} // Los posts no tienen materiales por ahora
          images={postItem.imagen ? [postItem.imagen] : []}
        />
        <Footer/>
      </>
    );
  }

  // Si es un producto estático, mostrar sus datos
  if (!item) {
    return (
      <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-600">Producto no encontrado</p>
        </div>
        <Footer/>
      </>
    );
  }

  return (
    <>
      <Navbar/>
      <ProductDetailPage
        onclick={handleAddToCart}
        name={item.name || ""}
        price={item.price || ""}
        color={item.color || ""}
        sizes={item.sizes || []}
        description={item.description || ""}
        materials={item.materials || []}
        images={item.image || []}
      />
      <Footer/>
    </>
  )
}

export default DetailProductPage;
