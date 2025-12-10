import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-indigo-100 to-white">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96 text-center border border-indigo-200">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 mb-3">
          PillPopHQ
        </h1>
        <p className="text-sm text-gray-500 mb-8">Your daily dose of knowledge check</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-500 to-sky-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-xs text-gray-400">© {new Date().getFullYear()} PillPopHQ. All rights reserved.</p>
      </div>
    </div>
  );
}
