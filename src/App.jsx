import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardSuperAdmin from "./pages/DashboardSuperAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/superadmin/dashboard" element={<DashboardSuperAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
