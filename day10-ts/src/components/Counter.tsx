import React, { useState } from "react";

type CounterProps = {
  title: string;
};

const Counter: React.FC<CounterProps> = ({ title }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
