import React from "react";

const Counter = React.memo(({ count }) => {
  console.log("🔁 Counter rendered");

  return (
    <div>
      <h3>Counter Component</h3>
      <p>Count value: {count}</p>
    </div>
  );
});

export default Counter;
