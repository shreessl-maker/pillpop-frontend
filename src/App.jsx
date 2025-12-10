import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import DashboardSuperAdmin from "./pages/DashboardSuperAdmin.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import DashboardStaff from "./pages/DashboardStaff.jsx";

export default function App() {
  const userRole = localStorage.getItem("role");

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/superadmin" element={<DashboardSuperAdmin />} />
      <Route path="/dashboard/admin" element={<DashboardAdmin />} />
      <Route path="/dashboard/staff" element={<DashboardStaff />} />
      <Route
        path="*"
        element={
          userRole ? (
            <Navigate to={`/dashboard/${userRole}`} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
}
