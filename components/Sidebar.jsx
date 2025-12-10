import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`block px-4 py-2 rounded-md ${
        location.pathname === path
          ? "bg-white text-blue-600 font-semibold"
          : "text-white hover:bg-blue-500"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-600 to-purple-600 text-white p-5">
      <div className="flex items-center mb-6">
        <img
          src="/logo-client-placeholder.png"
          alt="Client Logo"
          className="w-10 h-10 rounded-full mr-3 border border-white"
        />
        <h2 className="text-lg font-semibold">Client Name</h2>
      </div>
      <nav className="space-y-3">
        {navItem("/dashboard", "Dashboard")}
        {navItem("/reports", "Reports")}
        {navItem("/settings", "Settings")}
      </nav>
    </aside>
  );
}
