const Counter = ({ onIncrement }) => {
  console.log("🟢 Counter rendered");

  return (
    <button
      onClick={onIncrement}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      Increment Count
    </button>
  );
};

export default Counter;