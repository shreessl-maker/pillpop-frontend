import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const menuItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/reports", label: "Reports" },
    { path: "/settings", label: "Settings" },
  ];

  return (
    <aside className="bg-gradient-to-b from-blue-600 to-purple-600 text-white w-64 h-screen flex flex-col justify-between p-5 shadow-lg">
      <div>
        <div className="text-2xl font-bold mb-10 text-center">📘 PillPopHQ</div>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-3 py-2 rounded-md text-lg transition ${
                  location.pathname === item.path
                    ? "bg-white text-blue-600 font-semibold"
                    : "hover:bg-blue-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-center opacity-70">
        © {new Date().getFullYear()} PillPopHQ
      </p>
    </aside>
  );
}

