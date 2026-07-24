import React from "react";
import Sidebar from "@/components/fullnodecontent/nodesidebar";
import GetStartedPage from "@/components/fullnodecontent/GetStartedNode";

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
