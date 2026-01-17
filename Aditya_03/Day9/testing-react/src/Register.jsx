import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    if (!email || !password) {
      setMsg("All fields required");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ email, password })
    );

    setMsg("Registration successful");

    setTimeout(() => {
      navigate("/login");
    }, 800);
  }

  return (
    <div className="container">
      <h2>Register</h2>

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

      <button onClick={handleRegister}>Register</button>

      <p className="success">{msg}</p>
    </div>
  );
}

export default Register;
