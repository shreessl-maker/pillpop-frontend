import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardAdmin() {
  const data = {
    labels: ["Users", "Staff", "Reports", "Tasks", "Feedback"],
    datasets: [
      {
        label: "Monthly Growth",
        data: [12, 19, 8, 15, 10],
        backgroundColor: ["#6366f1", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b"],
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="Admin Dashboard" />
        <div className="p-8 bg-gradient-to-br from-indigo-50 to-sky-50 flex-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Analytics Overview</h2>
            <Bar data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
