import React from "react";
import Counter from "../components/Counter";

const Home: React.FC = () => {
  return (
    <div>
      <h1>React + TypeScript Demo</h1>
      <Counter title="My Counter Component" />
    </div>
  );
};

export default Home;
