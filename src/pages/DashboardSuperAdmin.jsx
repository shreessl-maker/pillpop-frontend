import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardSuperAdmin() {
  const data = {
    labels: ["Client A", "Client B", "Client C"],
    datasets: [{ label: "Active Users", data: [120, 95, 150], backgroundColor: ["#3b82f6", "#8b5cf6", "#22c55e"] }],
  };

  return (
    <div>
      <Navbar title="Super Admin Dashboard" />
      <div className="flex">
        <Sidebar menu={["Overview", "Manage Clients", "Reports"]} />
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Client Overview</h2>
          <Bar data={data} />
        </div>
      </div>
    </div>
  );
}
