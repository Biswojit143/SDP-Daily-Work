import { memo } from "react";

const Header = () => {
  console.log("🟢 Header rendered");

  return (
    <h1 className="text-2xl font-bold">
      React Performance Playground
    </h1>
  );
};

export default memo(Header);
