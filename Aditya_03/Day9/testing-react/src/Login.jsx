import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const savedUser =
    JSON.parse(localStorage.getItem("user")) || {};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (
      email === savedUser.email &&
      password === savedUser.password
    ) {
      setMsg("Login successful");

      setTimeout(() => {
        navigate("/home");
      }, 800);
    } else {
      setMsg("Invalid credentials");
    }
  }

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p className={msg.includes("success") ? "success" : "error"}>
        {msg}
      </p>
    </div>
  );
}

export default Login;
