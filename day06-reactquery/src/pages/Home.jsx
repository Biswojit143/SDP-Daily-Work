import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { dispatch } = useCart();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="grid grid-cols-2 gap-6 p-10">
      {data.map(product => (
        <div key={product.id} className="border p-4 rounded">
          <h2 className="font-bold">{product.name}</h2>
          <p>₹{product.price}</p>

          <button
            onClick={() =>
              dispatch({ type: "ADD", payload: product })
            }
            className="mt-2 bg-black text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
