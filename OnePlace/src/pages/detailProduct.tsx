import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { addToCart } from "../redux/cartSlice";
import products from "../data/products.json";
import type { Product as ProductType } from "../type/type";

const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const product = (products as ProductType[]).find((p: ProductType) =>
    Number(p.id) === Number(id)
  );

  if (!product) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    const imageString = Array.isArray(product.image)
      ? product.image[0] || ""
      : (product.image as unknown as string) || "";

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: imageString,
        color: product.color,
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 max-w-5xl mx-auto">
      
      <div className="flex-1">
        <img
          src={Array.isArray(product.image) ? product.image[0] || "/img/default.jpg" : (product.image as unknown as string) || "/img/default.jpg"}
          alt={product.name}
          className="rounded-lg object-cover w-full"
        />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-500">Color: {product.color}</p>
        <p className="text-xl font-semibold">${product.price}</p>

        <button
          onClick={handleAddToCart}
          className="border border-black py-2 hover:bg-black hover:text-white transition"
        >
          ADD TO CART
        </button>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white py-2 hover:opacity-90"
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
