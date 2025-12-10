import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import DashboardAdmin from "./pages/DashboardAdmin.jsx";
import DashboardStaff from "./pages/DashboardStaff.jsx";
import DashboardSuperAdmin from "./pages/DashboardSuperAdmin.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard-admin" element={<DashboardAdmin />} />
      <Route path="/dashboard-staff" element={<DashboardStaff />} />
      <Route path="/dashboard-superadmin" element={<DashboardSuperAdmin />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
