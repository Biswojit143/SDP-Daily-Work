import React, { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  function handelLogin() {
    let trimmedEmail = email.trim();
    let trimmedPassword = password.trim();
    let oldData = localStorage.getItem("users");

    if (oldData) {
      let users = JSON.parse(oldData);
      let user = users.find((ele) => ele.email === trimmedEmail);
      if (users) {
        if (user.password === trimmedPassword) {
          localStorage.setItem("isLogin", "true");
          toast.success("Login Successful");
        } else {
          toast.error("Invalid Password");
        }
      } else {
        toast.error("Invalid Email");
      }
    } else {
      toast.error("No users found. Please register first.");
    }
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome Back 👋
        </h2>
        <p
          className='text-xl font-bold text-blue-800 mb-6 text-center'
        >
          Food <span className='text-red-900'>Hotel</span>
        </p>

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <input
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <input
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          onClick={handelLogin}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;