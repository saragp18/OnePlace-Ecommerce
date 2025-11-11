import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartslice";
import type { AppDispatch } from "../redux/store";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
}

const DetailProduct = () => {
  const dispatch = useDispatch<AppDispatch>();

  const product: Product = {
    id: 1,
    name: "Basic Hoodie",
    price: 50,
    image: "https://your-image-link.jpg",
    color: "White",
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    console.log(product);
    
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 p-8">
      
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg object-cover w-full"
        />
      </div>

     
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg">Color: {product.color}</p>
        <p className="text-xl font-semibold">${product.price}</p>

        
        <button
          onClick={() => handleAddToCart(product)}
          className="border border-black py-2 hover:bg-black hover:text-white transition"
        >
          ADD TO CART
        </button>


        <button className="bg-black text-white py-2 hover:opacity-90"
                  onClick={() => {
                    console.log("ogla");
                    
                    handleAddToCart(product)}}
>
          
          BUY NOW
        </button>

        <button className="border border-gray-400 py-2 hover:bg-gray-100">
          CHAT HERE
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;
