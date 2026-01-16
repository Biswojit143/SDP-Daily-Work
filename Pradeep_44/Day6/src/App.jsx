import { useQuery } from "@tanstack/react-query";
import { useCart } from "./context/CartContext";

// Fake API (same one you created in services/api.js)
const fetchProducts = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "iPhone 15", price: 80000 },
        { id: 2, name: "MacBook Air", price: 120000 }
      ]);
    }, 800);
  });
};

function App() {
  const { cart, dispatch } = useCart();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Apple Store 🍎</h1>

      {/* Products */}
      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow"
            >
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>

              <button
                onClick={() =>
                  dispatch({ type: "ADD", payload: product })
                }
                className="mt-3 bg-black text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart */}
      <div className="mt-10 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-3">Cart</h2>

        {cart.length === 0 && <p>Your cart is empty</p>}

        {cart.map(item => (
          <div
            key={item.id}
            className="flex justify-between border-b py-2"
          >
            <span>
              {item.name} x {item.qty}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE", payload: item.id })
              }
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
