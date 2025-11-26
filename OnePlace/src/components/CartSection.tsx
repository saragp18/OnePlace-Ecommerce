import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { removeFromCart } from "../redux/cartSlice";

const CartSection = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  // ✅ FUNCIÓN SEGURA PARA EXTRAER NÚMEROS DEL PRECIO
  const parsePrice = (price: string | number) => {
    if (!price) return 0;

    if (typeof price === "number") return price;

    const match = price.replace(",", ".").match(/[\d.]+/g);
    return match ? Number(match[0]) : 0;
  };

  // ✅ TOTAL CON CONVERSIÓN SEGURA
  const total = items.reduce((sum, item) => {
    const price = parsePrice(item.price);
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => {
            const unitPrice = parsePrice(item.price);
            const lineTotal = unitPrice * item.quantity;

            return (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    className="w-24 rounded"
                    alt={item.name}
                  />

                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>{item.color}</p>

                    <p className="text-sm text-gray-600">
                      Unit: $
                      {unitPrice.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} USD
                    </p>

                    <p className="font-medium">
                      Total: $
                      {lineTotal.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} USD
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600"
                >
                  Remove
                </button>
              </div>
            );
          })}

          <div className="text-right text-xl mt-6 font-bold">
            TOTAL: $
            {total.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} USD
          </div>
        </>
      )}
    </div>
  );
};

export default CartSection;
