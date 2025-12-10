import React from "react";

export default function Navbar({ title }) {
  const logout = () => {
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="flex items-center gap-3">
        <img src="/logo-placeholder.png" alt="logo" className="w-8 h-8 rounded-full bg-white" />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <button onClick={logout} className="bg-white text-blue-700 px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-200">
        Logout
      </button>
    </div>
  );
}
