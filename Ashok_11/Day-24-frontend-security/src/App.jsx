import { useState } from "react";
import { authStore } from "./auth/authStore";

function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(authStore.isAuthenticated());

  const handleLogin = () => {
    // MOCK token (never do this in real apps)
    authStore.setToken("secure-token-example");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    authStore.clearToken();
    setLoggedIn(false);
  };

  return (
    <div style={{ paddingTop: 40, textAlign: "center" }}>
      <h2>Frontend Security Demo</h2>

      {!loggedIn ? (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <button onClick={handleLogin}>Login</button>

          <p style={{ color: "red", marginTop: 20 }}>
            Token is stored securely in memory (not localStorage)
          </p>
        </>
      ) : (
        <>
          <p>Logged in securely</p>
          <p style={{ fontSize: 12 }}>
            Token exists only during this session
          </p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default App;