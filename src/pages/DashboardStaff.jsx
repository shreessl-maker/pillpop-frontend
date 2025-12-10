import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, Tooltip, Legend, PointElement);

export default function DashboardStaff() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [2, 3, 5, 4, 6, 7],
        borderColor: "#3b82f6",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar title="Staff Dashboard" />
        <div className="p-8 bg-gradient-to-br from-sky-50 to-indigo-50 flex-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Weekly Performance</h2>
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
