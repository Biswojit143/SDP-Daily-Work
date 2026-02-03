import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Load persisted state
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  // Persist state on change
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // Listen for online/offline changes
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div style={{ paddingTop: "40px" }}>
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2>State Persistence & Offline</h2>

        <p>
          Status:{" "}
          <strong style={{ color: isOnline ? "green" : "red" }}>
            {isOnline ? "Online" : "Offline"}
          </strong>
        </p>

        <h3>Counter: {count}</h3>

        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button
          onClick={() => setCount(0)}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>

        <p style={{ marginTop: "20px", fontSize: "14px" }}>
          Refresh the page or go offline to test behavior.
        </p>
      </div>
    </div>
  );
}

export default App;