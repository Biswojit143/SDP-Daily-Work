import { products } from "./data/products";
import { useCart } from "./context/CartContext";

function App() {
  const { cart, dispatch } = useCart();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Apple Store 🍎</h1>

      <div className="grid grid-cols-2 gap-6">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded shadow">
            <img src={p.image} className="w-full h-32 object-contain" />
            <h2 className="mt-2 font-semibold">{p.name}</h2>
            <p>₹{p.price}</p>

            <button
              onClick={() => dispatch({ type: "ADD", payload: p })}
              className="mt-2 bg-black text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8">Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="flex justify-between mt-2">
          <span>{item.name} (x{item.qty})</span>
          <button
            onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
