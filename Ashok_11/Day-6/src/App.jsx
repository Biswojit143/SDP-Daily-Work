import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <ProductList setSelectedId={setSelectedId} />
      <ProductDetails id={selectedId} />
    </div>
  );
};

export default App;