import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../services/api";

const ProductDetails = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
  });

  if (!id) return <p>Select a product</p>;
  if (isLoading) return <p>Loading details...</p>;

  return (
    <div className="p-4 border rounded">
      <h2 className="font-semibold">{data.title}</h2>
      <p className="mt-2">{data.description}</p>
    </div>
  );
};

export default ProductDetails;