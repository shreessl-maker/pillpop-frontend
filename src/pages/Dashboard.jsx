import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-indigo-100 to-white">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center border border-indigo-200">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600 mb-3">
          Welcome to PillPopHQ Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-gradient-to-r from-indigo-500 to-sky-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
