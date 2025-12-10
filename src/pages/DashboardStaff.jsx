import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardStaff() {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Score",
        data: [65, 75, 85, 95],
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f630",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Navbar title="Staff Dashboard" />
      <div className="flex">
        <Sidebar menu={["My Tests", "History", "Performance"]} />
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-4">Weekly Performance</h2>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}
