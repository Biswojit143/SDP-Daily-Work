import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setLoggedIn(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!loggedIn ? (
        <div className="bg-white p-6 rounded shadow w-80 space-y-4">
          <h1 className="text-xl font-bold text-center">
            Login
          </h1>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
          />

          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white w-full py-2 rounded"
          >
            Login
          </button>
        </div>
      ) : (
        <h2 className="text-2xl font-semibold">
          Welcome, you are logged in!
        </h2>
      )}
    </div>
  );
};

export default App;