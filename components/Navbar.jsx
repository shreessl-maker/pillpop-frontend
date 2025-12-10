import React from "react";

export default function Navbar({ title }) {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-sky-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>
      <button
        className="bg-white text-indigo-600 px-4 py-1.5 rounded-md font-medium hover:bg-gray-100 transition"
        onClick={() => (window.location.href = "/")}
      >
        Logout
      </button>
    </nav>
  );
}
