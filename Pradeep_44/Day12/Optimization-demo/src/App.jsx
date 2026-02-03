import { useState, useCallback } from "react";
import Counter from "./Counter";
import ExpensiveCalculation from "./ExpensiveCalculation";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // ✅ useCallback prevents function recreation
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    marginTop: "20px",
  };

  return (
    <div style={themeStyles}>
      <h1>⚡ React Optimization Demo</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={() => setDark(!dark)} style={{ marginLeft: "10px" }}>
        Toggle Theme
      </button>

      <h2>Count: {count}</h2>

      <Counter count={count} />
      <ExpensiveCalculation number={count} />
    </div>
  );
}

export default App;
