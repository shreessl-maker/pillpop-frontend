import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-white">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}

