import { useMemo } from "react";

function slowFunction(num) {
  console.log("🐢 Running expensive calculation...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}

function ExpensiveCalculation({ number }) {
  const result = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div>
      <h3>Expensive Calculation</h3>
      <p>Result: {result}</p>
    </div>
  );
}

export default ExpensiveCalculation;
