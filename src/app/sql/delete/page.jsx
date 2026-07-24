import React from "react";
import Sidebar from "@/components/Sql/Sidebar";

import ObjectContent from "@/components/Sql/Delete";
export default function page() {
  return (
    <div>
      
      <div className="mt-30">
        {/* Sidebar Section */}

        <Sidebar />

        {/* Content Section */}

        <ObjectContent />
      </div>
    </div>
  );
}
