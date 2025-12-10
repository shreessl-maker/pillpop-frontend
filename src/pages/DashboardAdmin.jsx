import React from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardAdmin() {
  const doughnutData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["rgba(91, 33, 182, 0.6)", "rgba(37, 99, 235, 0.3)"],
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Average Test Score (%)",
        data: [78, 82, 85, 88, 84, 90],
        backgroundColor: "rgba(37, 99, 235, 0.6)",
      },
    ],
  };

  const sidebarLinks = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Staff", path: "#" },
    { label: "Reports", path: "#" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar links={sidebarLinks} />
      <div className="flex-1 flex flex-col">
        <Navbar role="Admin" />

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Total Staff</h3>
            <p className="text-3xl font-bold text-primary">22</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Avg Score</h3>
            <p className="text-3xl font-bold text-primary">84%</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-gray-600">Active Tests</h3>
            <p className="text-3xl font-bold text-primary">7</p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Completion Rate</h2>
            <Doughnut data={doughnutData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Average Scores</h2>
            <Bar data={barData} />
          </div>
        </div>

        <footer className="text-center text-gray-400 py-4">
          © 2025 PillPopHQ. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
