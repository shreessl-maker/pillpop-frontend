import React, { useState } from "react";
import { API_BASE_URL } from "../config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Login successful!");
        console.log("User Data:", data);
      } else {
        setMessage(`❌ ${data.message || "Login failed"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-white">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-96 text-center border border-purple-200">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
          PillPopHQ
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Your daily dose of knowledge check
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {message && (
          <p className="mt-4 text-sm font-medium text-gray-600">{message}</p>
        )}

        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} PillPopHQ. All rights reserved.
        </p>
      </div>
    </div>
  );
}
