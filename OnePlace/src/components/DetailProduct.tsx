import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import type { AppDispatch } from "../redux/store";

interface Product {
  id: number;
  name: string;
  price: string; 
  image: string;
  color: string;
}

const DetailProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  const product: Product = {
    id: 1,
    name: "Basic Hoodie",
    price: "50000", 
    image: "https://your-image-link.jpg",
    color: "White",
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">

      <img src={product.image} className="w-80 rounded" />

      <div>
        <h1 className="text-3xl">{product.name}</h1>
        <p>{product.color}</p>
        <p>${Number(product.price).toLocaleString()} COP</p>

        <button
          onClick={() => dispatch(addToCart(product as any))}
          className="border px-4 py-2 mt-3"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
