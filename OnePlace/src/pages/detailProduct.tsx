import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { addToCart } from "../redux/cartSlice";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const product = useSelector((state: RootState) =>
    state.products.items.find(p => p.id === Number(id))
  );

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    const imageString = Array.isArray(product.image) ? product.image[0] || "" : (product.image as unknown as string) || "";
    const numericPrice = typeof product.price === "number" ? product.price : parseFloat(String(product.price).replace(/[^0-9.-]+/g, "")) || 0;

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
