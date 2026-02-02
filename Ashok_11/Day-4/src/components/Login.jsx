import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No user found. Please register.");
      return;
    }

    if (email === user.email && password === user.password) {
      alert("Login Successful ✅");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Not registered?{" "}
          <Link to="/signup" className="text-blue-500 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
