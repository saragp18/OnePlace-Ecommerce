import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { addToCart } from "../redux/cartSlice";

  // Componente que muestra el detalle de un producto
const DetailProduct = () => {
  // Obtenemos el id del producto desde la URL
  const { id } = useParams();
  // Inicializamos dispatch para llamar acciones de Redux
  const dispatch = useDispatch<AppDispatch>();

  // Buscamos el producto específico usando el id
  const product = useSelector((state: RootState) =>
    state.products.items.find(p => p.id === Number(id))
  );

  // Si no existe el producto, mostramos mensaje
  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

   // Función que añade el producto al carrito
  const handleAddToCart = () => {
    // Si la imagen es un array, tomamos la primera. Si no, lo convertimos a string
    const imageString = Array.isArray(product.image) ? product.image[0] || "" : (product.image as unknown as string) || "";
    const numericPrice = typeof product.price === "number" ? product.price : parseFloat(String(product.price).replace(/[^0-9.-]+/g, "")) || 0;

    // Enviamos acción al store
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: numericPrice,
        image: imageString,
        color: product.color,
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-8">

      <div className="flex-1">
        <img
          src={product.image[0]}
          alt={product.name}
          className="rounded-lg object-cover w-full"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg">Color: {product.color}</p>
        <p className="text-xl font-semibold">${product.price}</p>

        <button
          onClick={handleAddToCart}
          className="border border-black py-2 hover:bg-black hover:text-white transition"
        >
          ADD TO CART
        </button>

        <button
          className="bg-black text-white py-2 hover:opacity-90"
          onClick={handleAddToCart}
        >
          BUY NOW
        </button>

        <button className="border border-gray-400 py-2 hover:bg-gray-100">
          CONTACT 
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
