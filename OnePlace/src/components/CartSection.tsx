import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";


const CartPage = () => {
  const items = useSelector((state: RootState) => state.cart.items);
console.log(items);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">🛒 Tu carrito</h1>

      {items.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        <div className="flex flex-col gap-4">
          {items.map((item) => 
        
          (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.color}</p>
                </div>
              </div>
              <p className="font-semibold">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
