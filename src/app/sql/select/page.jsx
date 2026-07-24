import React from "react";
import Sidebar from "@/components/Sql/Sidebar";

import DomMalContent from "@/components/Sql/Select";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <DomMalContent />
      </div>
    </div>
  );
}
