import React from "react";
import { Bar } from "react-chartjs-2";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardSuperAdmin() {
  const clientData = {
    labels: ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta"],
    datasets: [
      {
        label: "Tests Scheduled per Client",
        data: [10, 12, 8, 6, 9, 11],
        backgroundColor: "rgba(91, 33, 182, 0.6)",
      },
    ],
  };

  const sidebarLinks = [
    { label: "Overview", path: "/dashboard/superadmin" },
    { label: "Clients", path: "#" },
    { label: "Reports", path: "#" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar links={sidebarLinks} />
      <div className="flex-1 flex flex-col">
        <Navbar role="SuperAdmin" />

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Total Clients</h3>
            <p className="text-3xl font-bold text-primary">8</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Active Tests</h3>
            <p className="text-3xl font-bold text-primary">12</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Total Staff</h3>
            <p className="text-3xl font-bold text-primary">47</p>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Tests Scheduled per Client</h2>
            <Bar data={clientData} />
          </div>
        </div>

        <footer className="text-center text-gray-400 py-4">
          © 2025 PillPopHQ. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
