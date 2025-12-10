import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <header className="flex justify-between items-center bg-white shadow-md px-8 py-4">
      <div className="flex items-center gap-3">
        <img src="/logo-pillpophq.png" alt="App Logo" className="w-10" />
        <h1 className="text-2xl font-bold text-blue-600">PillPopHQ</h1>
      </div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition"
      >
        Logout
      </button>
    </header>
  );
}
