import { useCallback, useMemo, useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import ExpensiveList from "./components/ExpensiveList";

const App = () => {
  const [count, setCount] = useState(0);

  // ✅ FIX: memoize items array
  const items = useMemo(() => {
    return ["Apple", "Banana", "Orange"];
  }, []);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen p-6 space-y-6 bg-gray-100">
      <Header />

      <p className="text-lg">Count: {count}</p>

      <Counter onIncrement={increment} />

      <ExpensiveList items={items} />
    </div>
  );
};

export default App;