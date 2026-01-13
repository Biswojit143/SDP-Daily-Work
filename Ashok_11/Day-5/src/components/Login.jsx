import { useState } from "react";
import { usePreference } from "../context/PreferenceContext";

const Login = () => {
  const [name, setName] = useState("");
  const { setUser } = usePreference();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-teal-400 p-8 rounded-xl w-80">
        <h2 className="text-black text-xl mb-4 text-center">
          Login
        </h2>
        <input
          className="w-full p-2 rounded mb-4"
          placeholder="Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white p-2 rounded"
          onClick={() => setUser(name)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;