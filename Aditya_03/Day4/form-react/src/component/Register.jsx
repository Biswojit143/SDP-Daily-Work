import React, { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");

  function handelRegister(e) {
    e.preventDefault();
    try {
      let oldData = localStorage.getItem("users");
      let users = oldData ? JSON.parse(oldData) : [];

      users.push({ name, email, phone, password });

      localStorage.setItem("users", JSON.stringify(users));
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");

      toast.success("Registration Successful!");
    } catch (error) {
      toast.error("Registration Failed!");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Your Account ✨
        </h2>
        <p
          className='text-xl font-bold text-blue-800 mb-6 text-center'
        >
          Food <span className='text-red-900'>Hotel</span>
        </p>

        <form onSubmit={handelRegister} className="space-y-4">
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="text"
              id="fullname"
              name="fullname"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="tel"
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg shadow-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-pink-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;