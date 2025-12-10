import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const linkStyle = (path) =>
    `block py-2.5 px-4 rounded-lg transition ${
      location.pathname === path
        ? "bg-white text-blue-600 font-semibold"
        : "text-white hover:bg-blue-500"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-blue-600 to-purple-500 text-white p-4 flex flex-col">
      <div className="flex items-center mb-8">
        <img
          src="/logo-client-placeholder.png"
          alt="Client"
          className="w-10 h-10 rounded-full mr-3 border border-white"
        />
        <h2 className="text-lg font-semibold">Client Name</h2>
      </div>

      <nav className="space-y-2">
        <Link className={linkStyle("/dashboard")} to="/dashboard">
          Dashboard
        </Link>
        <Link className={linkStyle("/reports")} to="/reports">
          Reports
        </Link>
        <Link className={linkStyle("/settings")} to="/settings">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
