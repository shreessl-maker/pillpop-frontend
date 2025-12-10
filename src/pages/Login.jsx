// src/pages/Login.jsx
import React, { useState } from "react";
import { API_BASE_URL } from "../config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Attempting login for: ${email}`);
    alert(`Login attempted for: ${email}`);
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-10 w-96 text-center border border-gray-200">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-2">
        PillPopHQ
      </h1>
      <p className="text-gray-500 mb-8">Your daily dose of knowledge check</p>

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
          className="w-full py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Sign In
        </button>
      </form>

      <p className="mt-6 text-xs text-gray-400">
        © {new Date().getFullYear()} PillPopHQ. All rights reserved.
      </p>
    </div>
  );
}
