import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { removeFromCart } from "../redux/cartSlice";

const CartSection = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + Number(item.price.replace(/[^0-9.]/g, "")) * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              <div className="flex gap-4">
                <img src={item.image} className="w-24 rounded" />
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.color}</p>
                  <p>
                    $
                    {(Number(item.price.replace(/[^0-9.]/g, "")) * item.quantity).toLocaleString(
                      "en-US",
                      { minimumFractionDigits: 2, maximumFractionDigits: 2 }
                    )} USD
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
          ))}

          <div className="text-right text-xl mt-6 font-bold">
            TOTAL: $
            {total.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })} USD
          </div>
        </>
      )}
    </div>
  );
};

export default CartSection;
