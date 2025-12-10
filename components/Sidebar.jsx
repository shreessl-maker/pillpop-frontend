import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-white w-64 min-h-screen shadow-md border-r">
      <div className="p-5 text-center border-b">
        <h2 className="text-xl font-bold text-indigo-600">PillPopHQ</h2>
        <p className="text-xs text-gray-400">Your knowledge assistant</p>
      </div>

      <nav className="p-5 space-y-4">
        <Link
          to="/dashboard-admin"
          className="block text-gray-600 hover:text-indigo-600 font-medium"
        >
          Admin Dashboard
        </Link>
        <Link
          to="/dashboard-staff"
          className="block text-gray-600 hover:text-indigo-600 font-medium"
        >
          Staff Dashboard
        </Link>
        <Link
          to="/dashboard-superadmin"
          className="block text-gray-600 hover:text-indigo-600 font-medium"
        >
          SuperAdmin Dashboard
        </Link>
      </nav>
    </aside>
  );
}
