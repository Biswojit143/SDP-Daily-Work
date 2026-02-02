import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages((prev) => [...prev, data.text]);
    });

    return () => socket.off("message");
  }, []);

  return (
    <div style={{ paddingTop: "40px", textAlign: "center" }}>
      <h2>Real-time Messages</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {messages.map((msg, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {msg}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;