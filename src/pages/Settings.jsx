import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Settings() {
  const [companyLogo, setCompanyLogo] = useState(null);
  const [appLogo, setAppLogo] = useState(null);

  const handleUpload = (e, setLogo) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-8 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Logo Management</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Company Logo */}
              <div className="text-center">
                <h3 className="font-medium mb-2">Client Company Logo</h3>
                <div className="w-32 h-32 mx-auto border border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  {companyLogo ? (
                    <img src={companyLogo} alt="Company Logo" className="w-32 h-32 object-contain" />
                  ) : (
                    <span className="text-gray-400 text-sm">No Logo</span>
                  )}
                </div>
                <input
                  type="file"
                  onChange={(e) => handleUpload(e, setCompanyLogo)}
                  className="mt-3 text-sm"
                />
              </div>

              {/* App Logo */}
              <div className="text-center">
                <h3 className="font-medium mb-2">PillPopHQ App Logo</h3>
                <div className="w-32 h-32 mx-auto border border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                  {appLogo ? (
                    <img src={appLogo} alt="App Logo" className="w-32 h-32 object-contain" />
                  ) : (
                    <span className="text-gray-400 text-sm">No Logo</span>
                  )}
                </div>
                <input
                  type="file"
                  onChange={(e) => handleUpload(e, setAppLogo)}
                  className="mt-3 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Admin Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Admin Name" className="p-3 border rounded-lg" />
              <input type="email" placeholder="Admin Email" className="p-3 border rounded-lg" />
              <input type="password" placeholder="New Password" className="p-3 border rounded-lg" />
              <button className="py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition">
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
