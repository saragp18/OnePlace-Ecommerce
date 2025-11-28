import { useNavigate } from "react-router-dom";
import products from "../data/products.json";

const ProductsShort = () => {
  const ProductsMan = products.filter((p) => p.id >= 69 && p.id <= 77);
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-left tracking-wider">
     SHORTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {ProductsMan.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            onClick={() => navigate("/product/" + item.id, { state: item.id })
        }
          >
            
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-full h-72 object-cover rounded-md mb-4"
            />
            <h3 className="text-sm font-medium text-gray-700 uppercase">
              {item.name}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsShort;
