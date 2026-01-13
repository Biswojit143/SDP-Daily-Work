import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api";

const ProductList = ({ setSelectedId }) => {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],   // 🔑 cache key
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,  // 5 minutes cache
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((product) => (
        <div
          key={product.id}
          onClick={() => setSelectedId(product.id)}
          className="p-4 border rounded cursor-pointer hover:bg-gray-100"
        >
          <h3 className="font-medium">{product.title}</h3>
          <p className="text-sm">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;