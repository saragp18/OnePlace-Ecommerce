import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function DetailProduct() {

  const { id } = useParams();
  const products = useSelector((state: RootState) => state.products.items);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p className="text-center p-10">Product not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-10 flex gap-10">
      <img
        src={product.image || "/img/default.jpg"}
        className="w-80 object-cover"
      />

      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-500">Color: {product.color}</p>
        <p className="text-xl font-semibold mt-4">${product.price}</p>
      </div>
    </div>
  );
}

export default DetailProduct;
