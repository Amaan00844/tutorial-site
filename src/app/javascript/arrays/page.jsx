import React from "react";
import Sidebar from "@/components/Javascript/Sidebar";

import ArrayContent from "@/components/Javascript/Arrays";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <ArrayContent />
      </div>
    </div>
  );
}
