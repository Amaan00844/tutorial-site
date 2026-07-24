import React from "react";
import Sidebar from "@/components/Sql/Sidebar";
import GetStartedPage from "@/components/Sql/GetStarted";

export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <GetStartedPage />
      </div>
    </div>
  );
}
