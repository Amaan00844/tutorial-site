import React from "react";
import GetStartedPage from "@/components/fullnodecontent/GetStartedNode";
import Sidebar from "@/components/fullnodecontent/nodesidebar";


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
