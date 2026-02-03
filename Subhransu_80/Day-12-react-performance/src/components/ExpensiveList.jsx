import { memo, useMemo } from "react";

const ExpensiveList = ({ items }) => {
  console.log("🟢 ExpensiveList rendered");

  const processedItems = useMemo(() => {
    return items.map((item) => {
      let total = 0;
      for (let i = 0; i < 1000000; i++) {
        total += i;
      }
      return item;
    });
  }, [items]);

  return (
    <ul className="list-disc pl-6">
      {processedItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default memo(ExpensiveList);