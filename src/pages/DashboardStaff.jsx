import React from "react";
import { Line } from "react-chartjs-2";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function DashboardStaff() {
  const lineData = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [
      {
        label: "Performance Trend (%)",
        data: [70, 75, 78, 82, 85, 90],
        borderColor: "rgba(91, 33, 182, 0.8)",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const sidebarLinks = [
    { label: "Dashboard", path: "/dashboard/staff" },
    { label: "My Tests", path: "#" },
    { label: "Reports", path: "#" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar links={sidebarLinks} />
      <div className="flex-1 flex flex-col">
        <Navbar role="Staff" />

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Upcoming Tests</h3>
            <p className="text-3xl font-bold text-primary">2</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Completed Tests</h3>
            <p className="text-3xl font-bold text-primary">5</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Average Score</h3>
            <p className="text-3xl font-bold text-primary">88%</p>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Performance Trend</h2>
            <Line data={lineData} />
          </div>
        </div>

        <footer className="text-center text-gray-400 py-4">
          © 2025 PillPopHQ. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
